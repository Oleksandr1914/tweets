import { Link } from "react-router-dom";
import { BiArrowToLeft } from "react-icons/bi";
import styled from "styled-components";

export const GoBackButton = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 14px;
  padding-left: 20px;
  width: 196px;
  background-color: #f5f5f5;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  color: #373737;
  :hover {
    color: #535bf2;
  }
  :hover svg {
    color: #535bf2;
  }
`;

export const Icon = styled(BiArrowToLeft)`
  position: absolute;
  top: 9px;
  left: 18px;
  color: #373737;
  width: 30px;
  height: 30px;
`;
