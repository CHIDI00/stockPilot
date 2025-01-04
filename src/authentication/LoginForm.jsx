import { useState } from "react";
import Button from "../ui/Button";
// import Form from "../ui/Form";
// import Input from "../ui/Input";
import FormRowVertical from "../ui/FormRowVertical";
import styled, { css } from "styled-components";

const Input = styled.input`
	width: 100%;
	height: 3.5rem;
`;

const Form = styled.form`
	${(props) =>
		props.type !== "modal" &&
		css`
			/* padding: 2.4rem 4rem; */

			/* Box */
			background-color: var(--color-grey-0);
			/* border: 1px solid var(--color-grey-100); */
			border-radius: var(--border-radius-md);
		`}

	${(props) =>
		props.type === "modal" &&
		css`
			width: 80rem;
		`}
    
  overflow: hidden;
	font-size: 1.4rem;
	width: 100%;

	border: 1px solid var(--color-grey-300);
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
