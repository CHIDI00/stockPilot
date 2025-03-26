import React from "react";
import styled from "styled-components";

const StyledMenuButton = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--color-grey-100);
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const MenuButton = ({ onClick }) => {
  return (
    <StyledMenuButton onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </StyledMenuButton>
  );
};

export default MenuButton;