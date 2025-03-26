import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import ThemeMode from "./ThemeMode";
import HeaderMenu from "../ui/HeaderMenu";
import { device } from "../utils/devices";
import { HiArrowLeft } from "react-icons/hi2";

const StyledSidebar = styled.aside`
	position: relative;
	background-color: var(--color-grey-50);
	padding: 3.2rem 2.4rem;
	border-right: 1px solid var(--color-grey-100);
	border-radius: 15px;

	grid-row: 1 / -1;
	display: grid;
	grid-template-rows: auto 1fr auto;
	flex-direction: column;
	gap: 2rem;

	@media ${device.tablet} {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 30rem;
		z-index: 1000;
		transform: ${(props) =>
			props.isOpen ? "translateX(0)" : "translateX(-100%)"};
		transition: transform 0.3s ease-in-out;
		border-radius: 0 15px 15px 0;
	}
`;

const CLoseBtn = styled.span`
	position: absolute;
	top: 20%;
	right: -40px;

	display: none;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 50px;
	font-size: 3rem;
	border-radius: 0 5px 5px 0;
	cursor: pointer;
	background-color: var(--color-brand-90);
	color: white;
	/* opacity: 0.5; */

	@media screen and (${device.tablet}) {
		display: flex;
	}
`;

const LogoutMobileView = styled.span`
	display: none;

	@media screen and (${device.tablet}) {
		display: flex;
	}
`;

const SideBar = ({ isOpen, onToggleSidebar }) => {
	return (
		<StyledSidebar isOpen={isOpen}>
			{isOpen && (
				<CLoseBtn onClick={onToggleSidebar}>
					<HiArrowLeft />
				</CLoseBtn>
			)}
			<Logo />
			<MainNav onToggleSidebar={onToggleSidebar} />
			<LogoutMobileView>
				<HeaderMenu />
			</LogoutMobileView>
			<ThemeMode />
		</StyledSidebar>
	);
};

export default SideBar;
