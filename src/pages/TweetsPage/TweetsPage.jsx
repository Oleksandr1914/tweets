import React, { useEffect } from "react";
import UserCard from "../../components/UserCard/UserCard";
import { Container, Gallery, HeaderContainer } from "./TweetsPage.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/usersSlice";
import LoadMore from "../../components/LoadMore/LoadMore";
import GoBack from "../../components/GoBack/GoBack";
import Dropdown from "../../components/Dropdown/Dropdown";

const TweetsPage = () => {
  const { users, status, error } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

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
          users.map((el) => <UserCard key={el.id} card={el} />)
        )}
      </Gallery>
      {status === "loading" ? (
        <h2 style={{ textAlign: "center" }}>Loading...</h2>
      ) : (
        <LoadMore />
      )}
    </Container>
  );
};

export default TweetsPage;
