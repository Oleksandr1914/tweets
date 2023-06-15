import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownHeader = styled.div`
  padding: 14px 36px;
  width: 160px;
  background-color: #f5f5f5;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  color: #373737;
  :hover {
    cursor: pointer;
  }
`;

export const DropdownBody = styled.div`
  position: absolute;
  top: 44px;
  z-index: 10;
  width: 160px;
  background-color: #f5f5f5;
  box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.25);
  border-bottom-right-radius: 10.3108px;
  border-bottom-left-radius: 10.3108px;
`;

export const DropdownCategory = styled.div`
  padding: 8px 36px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  color: #373737;
  :hover {
    cursor: pointer;
    color: #6100b0;
  }
`;
