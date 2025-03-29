import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";

import Row from "../ui/Row";
import { useUpdateUser } from "../authentication/useUpdateUser";
import styled from "styled-components";
import { HiChevronLeft } from "react-icons/hi2";
import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../ui/Heading";

const NavStyle = styled.div`
	margin-bottom: 2rem;
`;

function ChangePassword() {
	const { register, handleSubmit, formState, getValues, reset } = useForm();
	const { errors } = formState;

	const { updateUser, isUpdating } = useUpdateUser();

	const moveBack = useMoveBack();

	function onSubmit({ password }) {
		updateUser({ password }, { onSuccess: reset });
	}

	return (
		<>
			<NavStyle>
				<Row type="horizontal">
					<Button onClick={moveBack}>
						<HiChevronLeft /> Go Back
					</Button>
				</Row>
			</NavStyle>

			<Row>
				<Heading as="h3">Update password</Heading>

				<Form onSubmit={handleSubmit(onSubmit)}>
					<FormRow
						label="Password (min 8 characters)"
						error={errors?.password?.message}
					>
						<Input
							type="password"
							id="password"
							autoComplete="current-password"
							disabled={isUpdating}
							{...register("password", {
								required: "This field is required",
								minLength: {
									value: 8,
									message: "Password needs a minimum of 8 characters",
								},
							})}
						/>
					</FormRow>

					<FormRow
						label="Confirm password"
						error={errors?.passwordConfirm?.message}
					>
						<Input
							type="password"
							autoComplete="new-password"
							id="passwordConfirm"
							disabled={isUpdating}
							{...register("passwordConfirm", {
								required: "This field is required",
								validate: (value) =>
									getValues().password === value || "Passwords need to match",
							})}
						/>
					</FormRow>
					<Row
						type="horizontal"
						style={{ margin: "15px 0", justifyContent: "flex-end", gap: "8px" }}
					>
						<Button onClick={reset} type="reset" variation="secondary">
							Cancel
						</Button>
						<Button disabled={isUpdating}>Update password</Button>
					</Row>
				</Form>
			</Row>
		</>
	);
}

export default ChangePassword;
