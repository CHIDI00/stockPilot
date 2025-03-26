import React from "react";
import styled from "styled-components";
import HeaderMenu from "../ui/HeaderMenu";
import UserAvatar from "../authentication/UserAvatar";
import MenuButton from "./MenuButton";
import { device } from "../utils/devices";

const StyledHeader = styled.header`
	background-color: var(--color-grey-0);
	padding: 1.2rem 4.8rem;
	border-bottom: 1px solid var(--color-grey-100);

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const UserContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 2.4rem;
`;

const MenuButtonContainer = styled.div`
	display: none;

	@media ${device.tablet} {
		display: block;
	}
`;

const Header = ({ onToggleSidebar }) => {
	return (
		<StyledHeader>
			<MenuButtonContainer>
				<MenuButton onClick={onToggleSidebar} />
			</MenuButtonContainer>
			<UserContainer>
				<UserAvatar />
				<HeaderMenu />
			</UserContainer>
		</StyledHeader>
	);
};

export default Header;
