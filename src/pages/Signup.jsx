import React from "react";
import SignupForm from "../authentication/SignupForm";
import apppreview from "/apppreview.jpg";
import apppreviewDark from "/apppreviewDark.png";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";
import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
import { device } from "../utils/devices";


const LoginLayout = styled.main`
	display: flex;
	min-height: 97vh;
`;

const AppPreview = styled.div`
	display: flex;
	width: 60%;
	height: inherit;
	background-color: var(--color-grey-300);
	background-repeat: no-repeat;
	background-position: right;
	background-size: 90%;
	border-radius: 20px 20px 20px 20px;

	@media screen and (${device.mobileL}) {
		display: none;
	}
`;

const LoginFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 40%;
	padding: 7rem 5rem 7rem 7rem;
	gap: 2rem;

	@media screen and (${device.mobileL}) {
		width: 100%;
		padding: 2.5rem;
	}
`;
const Signup = () => {
	const { isDarkMode } = useDarkMode();

	return (
		<LoginLayout>
			<AppPreview
				style={{
					backgroundImage: `url(${isDarkMode ? apppreviewDark : apppreview})`,
				}}
			></AppPreview>
			<LoginFormContainer>
				<Logo />
				<Heading as="h3">Create an account</Heading>
				<SignupForm />
			</LoginFormContainer>
		</LoginLayout>
	);
};

export default Signup;
