import React from "react";
import { ContainerHome, ItemLink, NavBox } from "./HomePage.styled";

const HomePage = () => {
  return (
    <ContainerHome>
      <NavBox>
        <ItemLink to="/">Home</ItemLink>
        <ItemLink to="/tweets-page">Tweets</ItemLink>
      </NavBox>
    </ContainerHome>
  );
};

export default HomePage;
