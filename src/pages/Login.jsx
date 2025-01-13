import styled from "styled-components";
import LoginForm from "../authentication/LoginForm";
import apppreview from "/apppreview.jpg";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";
import SupplierTable from "../supply/SupplierTable";

const LoginLayout = styled.main`
	display: flex;
	min-height: 97vh;
`;

const AppPreview = styled.div`
	display: flex;
	width: 60%;
	height: inherit;
	background-color: var(--color-grey-300);
	background-image: url(${apppreview});
	background-repeat: no-repeat;
	background-position: right;
	background-size: 90%;
	border-radius: 20px 20px 20px 20px;
`;

const LoginFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 40%;
	padding: 7rem 5rem 7rem 7rem;
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
				<SupplierTable />
			</LoginFormContainer>
		</LoginLayout>
	);
}

export default Login;
