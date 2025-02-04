import React from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
import { NavLink } from "react-router-dom";

const ThemeContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-content: center;
	align-items: center;
	width: 17rem;
	height: 4rem;
	border-radius: 8px;
	background-color: var(--color-grey-0);
`;

const Dark = styled.div`
	height: 100%;
	color: #000;
	font-weight: 700;

	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	gap: 6px;
`;

const Light = styled(NavLink)`
	background-color: var(--color-primary-300);
	height: 100%;
	color: #fff;
	font-weight: 700;

	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	gap: 6px;

	&:active,
	&.active:link,
	&.active:visited {
		background-color: var(--color-grey-600);

		color: var(--color-grey-100);
		border-radius: 6px;
		border: 2px solid var(--color-primary-600);
	}
`;

const ThemeMode = () => {
	const { isDarkMode, toggleDarkMode } = useDarkMode();

	return (
		<ThemeContainer>
			<Light onClick={toggleDarkMode}>
				<HiOutlineSun />
				Light
			</Light>

			<Light onClick={toggleDarkMode}>
				<HiOutlineMoon />
				Dark
			</Light>
		</ThemeContainer>
	);
};

export default ThemeMode;
