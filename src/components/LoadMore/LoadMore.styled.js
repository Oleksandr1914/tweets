import styled from "styled-components";
import { BiArrowToBottom } from "react-icons/bi";

export const ButtonLoadMpre = styled.button`
  position: relative;
  display: block;
  margin: 0 auto;
  margin-top: 80px;
  padding: 14px;
  padding-right: 30px;
  width: 196px;
  background-color: #471ca9;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  color: rgb(235, 216, 255);
`;

export const Icon = styled(BiArrowToBottom)`
  position: absolute;
  top: 9px;
  right: 12px;
  color: rgb(235, 216, 255);
  width: 30px;
  height: 30px;
`;
