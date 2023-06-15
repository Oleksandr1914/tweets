import React, { useState } from "react";
import {
  DropdownHeader,
  DropdownContainer,
  DropdownBody,
  DropdownCategory,
} from "./Dropdown.styled";

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  const [elementDropdown, setElementDropdown] = useState("show all");
  const arrayCategory = ["show all", "follow", "followings"];

  const onDropdownHeader = () => {
    setDropdown(!dropdown);
  };

  const onDropdownCategory = (event) => {
    setElementDropdown(event.target.innerText);
    setDropdown(!dropdown);
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={onDropdownHeader}>
        {elementDropdown}
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
