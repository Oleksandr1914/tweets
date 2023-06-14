import React, { useEffect } from "react";
import UserCard from "../../components/UserCard/UserCard";
import { Gallery } from "./TweetsPage.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/usersSlice";
import LoadMore from "../../components/LoadMore/LoadMore";

const TweetsPage = () => {
  const { users, status, error, page } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch]);

  return (
    <div>
      <Gallery>
        {status === "loading" && <h2>Loading...</h2>}
        {error ? (
          <h2>An error occured: {error}</h2>
        ) : (
          users.map((el) => <UserCard key={el.id} card={el} />)
        )}
      </Gallery>
      <LoadMore />
    </div>
  );
};

export default TweetsPage;
