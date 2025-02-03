import React from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import styled from "styled-components";
import useDarkMode from "../context/DarkModeContext";

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

const Light = styled.div`
	background-color: var(--color-primary-700);
	height: 100%;
	color: #fff;
	font-weight: 700;

	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	gap: 6px;
`;

const ThemeMode = () => {
	const { isDarkMode, toggleDarkMode } = useDarkMode();
	return (
		<ThemeContainer>
			<Light>
				<HiOutlineSun />
				Light
			</Light>
			<Dark>
				<HiOutlineMoon />
				Dark
			</Dark>
		</ThemeContainer>
	);
};

export default ThemeMode;
