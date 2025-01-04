import { useState } from "react";
// import Button from "../ui/Button";
import FormRowVertical from "../ui/FormRowVertical";
import styled, { css } from "styled-components";

const Input = styled.input`
	width: 100%;
	height: 4rem;
	padding: 1rem 1.2rem;
	border-radius: 8px;
	margin-bottom: 1rem;
	border: 1px solid var(--color-grey-300);
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	font-size: 1.4rem;
	width: 100%;
	border: none;
`;

const Button = styled.button`
	font-size: 1.4rem;
	padding: 1.2rem 2.2rem;
	font-weight: 500;
	color: var(--color-grey-50);
	background-color: var(--color-primary-600);
	border: none;
	border-radius: 8px;
	box-shadow: var(--shadow-sm);
	width: 100%;
	margin: 1rem 0;

	&:hover {
		background-color: var(--color-primary-700);
	}
`;

const LoginSignupButtons = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const ForgottenPassword = styled.p`
	font-size: 1.2rem;
	color: #5d5def;
	width: 100%;
	text-align: right;
	cursor: pointer;
`;

function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmit() {}

	return (
		<Form onSubmit={handleSubmit}>
			<FormRowVertical label="Email address">
				<Input
					type="email"
					id="email"
					// This makes this form better for password managers
					autoComplete="username"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</FormRowVertical>
			<FormRowVertical label="Password">
				<Input
					type="password"
					id="password"
					autoComplete="current-password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</FormRowVertical>

			<ForgottenPassword>Forgotten your password?</ForgottenPassword>

			<LoginSignupButtons>
				<Button size="large">Login</Button>
				<p>OR</p>
				<Button size="large">Sign up</Button>
			</LoginSignupButtons>
		</Form>
	);
}

export default LoginForm;
