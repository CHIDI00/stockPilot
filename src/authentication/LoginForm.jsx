import { useState } from "react";
import Button from "../ui/Button";
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
	font-size: 1.4rem;
	width: 100%;
	border: none;
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
			<FormRowVertical>
				<Button size="large">Login</Button>
			</FormRowVertical>
		</Form>
	);
}

export default LoginForm;
