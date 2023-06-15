import React, { useState } from "react";
import {
  DropdownHeader,
  DropdownContainer,
  DropdownBody,
  DropdownCategory,
  Icon,
} from "./Dropdown.styled";
import { useDispatch } from "react-redux";
import { dropdownChange } from "../../redux/usersSlice";

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  const [elementDropdown, setElementDropdown] = useState("show all");
  const arrayCategory = ["show all", "follow", "following"];

  const dispatch = useDispatch();

  const onDropdownHeader = () => {
    setDropdown(!dropdown);
  };

  const onDropdownCategory = (event) => {
    setElementDropdown(event.target.innerText);
    setDropdown(!dropdown);
    dispatch(dropdownChange(event.target.innerText));
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={onDropdownHeader}>
        {elementDropdown}
        <Icon />
      </DropdownHeader>
      {dropdown && (
        <DropdownBody>
          {arrayCategory.map((category) => (
            <DropdownCategory
              key={category}
              onClick={(e) => onDropdownCategory(e)}
            >
              {category}
            </DropdownCategory>
          ))}
        </DropdownBody>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
