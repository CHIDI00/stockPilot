import { useState } from "react";
// import Button from "../ui/Button";
import FormRowVertical from "../ui/FormRowVertical";
import styled, { css } from "styled-components";
import { useLogin } from "./useLogin";
import SpinnerMini from "../ui/SpinnerMini";
import { useNavigate } from "react-router-dom";

const Input = styled.input`
	width: 100%;
	height: 4rem;
	padding: 1rem 1.2rem;
	border-radius: 8px;
	margin-bottom: 1rem;
	color: #000;
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
	color: var(--color-grey-800);
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

	const navigate = useNavigate();

	const { login, isLoading } = useLogin();

	function handleSubmit(e) {
		e.preventDefault();
		if (!email || !password) return;

		login(
			{ email, password },
			{
				onSettled: () => {
					setEmail("");
					setPassword("");
				},
			}
		);
	}

	return (
		<Form onSubmit={handleSubmit}>
			<FormRowVertical label="Email address">
				<Input
					type="email"
					id="email"
					// This makes this form better for password managers
					autoComplete="username"
					placeholder="Enter your email address"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					disabled={isLoading}
				/>
			</FormRowVertical>
			<FormRowVertical label="Password">
				<Input
					type="password"
					id="password"
					autoComplete="current-password"
					placeholder="Enter password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					disabled={isLoading}
				/>
			</FormRowVertical>

			<ForgottenPassword>Forgotten your password?</ForgottenPassword>

			<LoginSignupButtons>
				<Button size="large" onClick={handleSubmit} disabled={isLoading}>
					{!isLoading ? "Log in" : <SpinnerMini />}
				</Button>
				<p>OR</p>
				<Button size="large" onClick={() => navigate("/signup")}>
					Register
				</Button>
			</LoginSignupButtons>
		</Form>
	);
}

export default LoginForm;
