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

	@media ${device.mobileL} {
		padding: 1.2rem 0;
	}
`;

const Timer = styled.span`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 5px;

	div {
		font-weight: 700;
	}
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

const LogoutMobileView = styled.span`
	display: flex;

	@media screen and (${device.tablet}) {
		display: none;
	}
`;

const getGreeting = () => {
	const hour = new Date().getHours();
	if (hour >= 5 && hour < 12) return "Good Morning";
	if (hour >= 12 && hour < 17) return "Good Afternoon";
	return "Good Evening";
};

const Header = ({ onToggleSidebar }) => {
	return (
		<StyledHeader>
			<Timer>
				<MenuButtonContainer>
					<MenuButton onClick={onToggleSidebar} />
				</MenuButtonContainer>
				<div>{getGreeting()}</div>
			</Timer>
			<UserContainer>
				<UserAvatar />
				<LogoutMobileView>
					<HeaderMenu />
				</LogoutMobileView>
			</UserContainer>
		</StyledHeader>
	);
};

export default Header;
