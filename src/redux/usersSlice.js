import { current, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "tweets/fetchUsers",
  async function (_, { rejectWithValue }) {
    const url = new URL(
      "https://64896bad5fa58521caaf916d.mockapi.io/users/user"
    );
    url.searchParams.append("completed", false);
    url.searchParams.append("page", 1);
    url.searchParams.append("limit", 3);
    try {
      const response = await fetch(
        "https://64896bad5fa58521caaf916d.mockapi.io/users/user",
        {
          method: "GET",
          headers: { "content-type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Server Error!");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeUser = createAsyncThunk(
  "tweets/changeUser",
  async function (object, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `https://64896bad5fa58521caaf916d.mockapi.io/users/user/${object.id}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            follow: object.follow,
            followers: object.followers,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Server Error!");
      }
      const data = await response.json();

      dispatch(toggleUser(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "tweets",
  initialState: {
    users: [],
    status: null,
    error: null,
    page: 1,
    dropdown: "show all",
    filterUsers: [],
  },
  reducers: {
    filteredUsers(state, action) {
      state.filterUsers = action.payload;
    },
    dropdownChange(state, action) {
      state.dropdown = action.payload;
    },
    toggleUser(state, action) {
      const toggledUser = state.users.find((el) => el.id === action.payload.id);

      toggledUser.follow = action.payload.follow;
      toggledUser.followers = action.payload.followers;
    },
    togglePage(state, action) {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = "resolved";
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });

    builder.addCase(changeUser.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });
  },
});

export const { toggleUser, togglePage, dropdownChange, filteredUsers } =
  userSlice.actions;
export default userSlice.reducer;
