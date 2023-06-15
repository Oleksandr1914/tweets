import React, { useEffect, useState } from "react";
import UserCard from "../../components/UserCard/UserCard";
import { Container, Gallery, HeaderContainer } from "./TweetsPage.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, filteredUsers } from "../../redux/usersSlice";
import LoadMore from "../../components/LoadMore/LoadMore";
import GoBack from "../../components/GoBack/GoBack";
import Dropdown from "../../components/Dropdown/Dropdown";

const TweetsPage = () => {
  const { users, status, error, page, dropdown, filterUsers } = useSelector(
    (state) => state.users
  );

  const dispatch = useDispatch();

  const getUsersByPage = (page, limit, array) => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    return array.slice(0, endIndex);
  };

  const quantitCheck = (data, fData) => {
    if (dropdown === "show all") {
      return;
    }
    const filter = data.filter(
      (user) => user.follow === (dropdown === "follow" ? "inactive" : "active")
    );
    return filter.length === fData.length;
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    if (dropdown === "follow") {
      const newArray = users.filter((user) => user.follow === "inactive");
      dispatch(filteredUsers(newArray));
    } else if (dropdown === "following") {
      const newArray = users.filter((user) => user.follow === "active");
      dispatch(filteredUsers(newArray));
    }
  }, [dropdown, users]);

  const page1 = getUsersByPage(
    page,
    3,
    dropdown === "show all" ? users : filterUsers
  );

  const checkFilter = quantitCheck(users, page1);

  return (
    <Container>
      <HeaderContainer>
        <GoBack />
        <Dropdown />
      </HeaderContainer>
      <Gallery>
        {error ? (
          <h2>An error occured: {error}</h2>
        ) : (
          page1.map((el) => <UserCard key={el.id} card={el} />)
        )}
      </Gallery>
      {!checkFilter &&
        (status === "loading" ? (
          <h2 style={{ textAlign: "center" }}>Loading...</h2>
        ) : (
          <LoadMore />
        ))}
    </Container>
  );
};

export default TweetsPage;
