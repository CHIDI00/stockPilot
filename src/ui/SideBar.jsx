import React from "react";
import styled from "styled-components";

const StyledSidebar = styled.aside`
	background-color: var(--color-grey-200);
	padding: 3.2rem 2.4rem;
	border-right: 1px solid var(--color-grey-100);
	border-radius: 15px;

	grid-row: 1 / -1;
`;

const SideBar = () => {
	return <StyledSidebar>SideBar</StyledSidebar>;
};

export default SideBar;
