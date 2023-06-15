import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ContainerHome = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(#ffff 0%, #bb9cff 20%, #26056f 100%);
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
`;

export const NavBox = styled.div`
  display: flex;
  gap: 30px;
  padding: 16px 30px;
  width: 100%;
  box-shadow: 0px 4px 12px 1px rgba(234, 175, 200, 0.66);
`;

export const ItemLink = styled(NavLink)`
  font-size: 24px;
  &.active {
    text-decoration: underline;
  }
  &:hover {
    color: #654ea3;
  }
`;

export const Title = styled.h1`
  margin: 300px auto;
  width: 700px;
  text-align: center;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 44px;
  line-height: 1.54;
  color: #d9eeff;
`;
