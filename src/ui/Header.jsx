import React from "react";
import styled from "styled-components";
import Logout from "../authentication/Logout";
import HeaderMenu from "../ui/HeaderMenu";

const StyledHeader = styled.header`
	background-color: var(--color-grey-0);
	padding: 1.2rem 4.8rem;
	border-bottom: 1px solid var(--color-grey-100);
`;

const Header = () => {
	return (
		<StyledHeader>
			<HeaderMenu />
		</StyledHeader>
	);
};

export default Header;
