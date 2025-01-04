import styled from "styled-components";
import LoginForm from "../authentication/LoginForm";
import loginphoto from "/loginphoto.png";
import apppreview from "/apppreview.jpg";

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
	padding: 3rem;

	border: 1px solid var(--color-grey-300);
`;

function Login() {
	return (
		<LoginLayout>
			<AppPreview></AppPreview>
			<LoginFormContainer>
				<LoginForm />
			</LoginFormContainer>
		</LoginLayout>
	);
}

export default Login;
