import styled from "styled-components";
import LoginForm from "../authentication/LoginForm";
import loginphoto from "/loginphoto.png";
import apppreview from "/apppreview.jpg";

const LoginLayout = styled.main`
	display: flex;

	/* border: 1px solid #000; */
	min-height: 97vh;
	/*display: grid;
	grid-template-columns: 48rem;
	align-content: center;
	justify-content: center;
	gap: 3.2rem;
	background-color: var(--color-grey-50); */
`;

const AppPreview = styled.div`
	display: flex;
	width: 60%;
	height: inherit;
	background-color: var(--color-grey-100);
	background-image: url(${apppreview});
	background-repeat: no-repeat;
	background-position: right;
	background-size: 90%;
`;

function Login() {
	return (
		<LoginLayout>
			<AppPreview></AppPreview>
			<LoginForm />
		</LoginLayout>
	);
}

export default Login;
