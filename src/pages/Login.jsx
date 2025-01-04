import styled from "styled-components";
import LoginForm from "../authentication/LoginForm";
import apppreview from "/apppreview.jpg";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";

const LoginLayout = styled.main`
	display: flex;
	min-height: 97vh;
`;

const AppPreview = styled.div`
	display: flex;
	width: 70%;
	height: inherit;
	background-color: var(--color-grey-100);
	background-image: url(${apppreview});
	background-repeat: no-repeat;
	background-position: right;
	background-size: 85%;
`;

const LoginFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 30%;
	padding: 3rem 2rem 3rem 3rem;
	gap: 2rem;
`;

function Login() {
	return (
		<LoginLayout>
			<AppPreview></AppPreview>
			<LoginFormContainer>
				<Logo />
				<Heading as="h3">Login your account</Heading>
				<LoginForm />
			</LoginFormContainer>
		</LoginLayout>
	);
}

export default Login;
