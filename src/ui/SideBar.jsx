import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import ThemeMode from "./ThemeMode";

const StyledSidebar = styled.aside`
	background-color: var(--color-grey-50);
	padding: 3.2rem 2.4rem;
	border-right: 1px solid var(--color-grey-100);
	border-radius: 15px;

	grid-row: 1 / -1;
	display: grid;
	grid-template-rows: auto 1fr auto;
	flex-direction: column;
	gap: 2rem;
`;

const SideBar = () => {
	return (
		<StyledSidebar>
			<Logo />
			<MainNav />
			<ThemeMode />
		</StyledSidebar>
	);
};

export default SideBar;
