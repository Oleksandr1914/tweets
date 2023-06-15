import React from "react";
import { ContainerHome, ItemLink, NavBox, Title } from "./HomePage.styled";

const HomePage = () => {
  return (
    <ContainerHome>
      <NavBox>
        <ItemLink to="/">Home</ItemLink>
        <ItemLink to="/tweets-page">Tweets</ItemLink>
      </NavBox>
      <Title>Lorem, ipsum dolor sit amet consectetur.</Title>
    </ContainerHome>
  );
};

export default HomePage;
