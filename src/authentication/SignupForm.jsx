import React from "react";

import FormRowVertical from "../ui/FormRowVertical";
import styled, { css } from "styled-components";
import { useLogin } from "./useLogin";
import SpinnerMini from "../ui/SpinnerMini";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSIgnup";

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
const SignupForm = () => {
	const { signup, isLoading } = useSignup();
	const { register, formState, getValues, handleSubmit, reset } = useForm();
	const { errors } = formState;
	const navigate = useNavigate();

	function onSubmit({ fullName, email, password }) {
		signup(
			{
				fullName,
				email,
				password,
			},
			{
				onSettled: () => reset(),
			}
		);
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<FormRowVertical label="Full name" error={errors?.fullName?.message}>
				<Input
					type="text"
					id="fullName"
					{...register("fullName", { required: "Enter your fullname" })}
				/>
			</FormRowVertical>
			<FormRowVertical label="Email address" error={errors?.email?.message}>
				<Input
					type="email"
					id="email"
					{...register("email", {
						required: "Enter your email address",
						pattern: {
							value: /\S+@\S+\.\S+/,
							message: "Please enter a valid email address",
						},
					})}
				/>
			</FormRowVertical>
			<FormRowVertical label="Password" error={errors?.password?.message}>
				<Input
					type="password"
					id="password"
					autoComplete="current-password"
					{...register("password", {
						required: "Create a password of at least 8 characters",
						minLength: {
							value: 8,
							message: "Password must be at least 8 characters long",
						},
					})}
				/>
			</FormRowVertical>
			<FormRowVertical
				label="Confirm Password"
				error={errors?.confirmPassword?.message}
			>
				<Input
					type="password"
					id="confirmPassword"
					autoComplete="current-password"
					{...register("confirmPassword", {
						required: "Confirm Password",
						validate: (value) =>
							value === getValues().password || "Password did not match",
					})}
				/>
			</FormRowVertical>

			<ForgottenPassword>Forgotten your password?</ForgottenPassword>

			<LoginSignupButtons>
				<Button size="large" disabled={isLoading}>
					{!isLoading ? "Sign up" : <SpinnerMini />}
				</Button>
				<p>OR</p>
				<Button
					size="large"
					disabled={isLoading}
					onClick={() => navigate("/login")}
				>
					Login
				</Button>
			</LoginSignupButtons>
		</Form>
	);
};

export default SignupForm;
