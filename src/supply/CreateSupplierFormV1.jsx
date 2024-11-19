import styled from "styled-components";

import Input from "../ui/Input";
import Form from "../ui/Form";
import Button from "../ui/Button";
import FileInput from "../ui/FileInput";
import Heading from "../ui/Heading";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSupplier } from "../services/apiSupplier";
import toast from "react-hot-toast";
import FormRow from "../ui/FormRow";

const FormRow2 = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: 24rem 1fr 1.2fr;
	gap: 2.4rem;

	padding: 1.2rem 0;

	&:first-child {
		padding-top: 0;
	}

	&:last-child {
		padding-bottom: 0;
	}

	&:not(:last-child) {
		border-bottom: 1px solid var(--color-grey-100);
	}

	&:has(button) {
		display: flex;
		justify-content: flex-end;
		gap: 1.2rem;
	}
`;

// const Label = styled.label`
// 	font-weight: 500;
// `;

// const Error = styled.span`
// 	font-size: 1.4rem;
// 	color: var(--color-red-700);
// `;

const Select = styled.select`
	border: 1px solid var(--color-grey-300);
	background-color: var(--color-grey-0);
	border-radius: var(--color-radius-sm);
	padding: 0.8rem 1.2rem;
	box-shadow: var(--shadow-sm);
`;

// const InputErrorContianer = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	align-items: flex-start;
// 	width: 100%;
// `;

function CreateSupplierForm() {
	const { register, handleSubmit, reset, formState } = useForm();
	const { errors } = formState;

	const queryClient = useQueryClient();

	const { mutate, isLoading: isCreating } = useMutation({
		mutationFn: createSupplier,
		onSuccess: () => {
			toast.success("New Supplier has been added"),
				queryClient.invalidateQueries({ queryKey: ["supplier"] }),
				reset();
		},
		onError: (err) => toast.error(err.message),
	});

	function onSubmit(data) {
		mutate(data);
	}

	function onError(error) {
		// console.log(error);
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit, onError)}>
			<Heading as="h3">New Supplier</Heading>

			<FormRow label="Supplier Name" error={errors?.supplierName?.message}>
				{/* <InputErrorContianer> */}
				<Input
					type="text"
					id="supplierName"
					disabled={isCreating}
					{...register("supplierName", {
						required: "This field is required",
					})}
				/>
				{/* </InputErrorContianer> */}
			</FormRow>

			<FormRow label="Product" error={errors?.product?.message}>
				{/* <InputErrorContianer> */}
				<Input
					type="text"
					id="product"
					disabled={isCreating}
					{...register("product", {
						required: "This field is required",
					})}
				/>
				{/* </InputErrorContianer> */}
			</FormRow>

			<FormRow label="Contact Number" error={errors?.contact?.message}>
				{/* <InputErrorContianer> */}
				<Input
					type="number"
					id="contact"
					// defaultValue="+234 "
					disabled={isCreating}
					{...register("contact", {
						required: "This field is required",
					})}
				/>
				{/* </InputErrorContianer> */}
			</FormRow>

			<FormRow label="Email" error={errors?.email?.message}>
				{/* <InputErrorContianer> */}
				<Input
					type="text"
					id="email"
					disabled={isCreating}
					{...register("email", {
						required: "This field is required",
						validate: (value) =>
							!value.includes("@gmail.com") &&
							"Please enter a valid email address",
					})}
				/>
				{/* </InputErrorContianer> */}
			</FormRow>

			<FormRow label="Type" error={errors?.return_type?.message}>
				{/* <InputErrorContianer> */}
				<Select
					name="type"
					id="return_type"
					disabled={isCreating}
					{...register("return_type", {
						required: "This field is required",
					})}
				>
					<option value="Taking Return">Taking Return</option>
					<option value="Not Taking Return">Not Taking Return</option>
				</Select>
				{/* </InputErrorContianer> */}
			</FormRow>

			<FormRow label="Quantity" error={errors?.quantity?.message}>
				{/* <InputErrorContianer> */}
				<Input
					type="text"
					id="quantity"
					disabled={isCreating}
					{...register("quantity", {
						required: "This field is required",
					})}
				/>
				{/* </InputErrorContianer> */}
			</FormRow>

			{/* <FormRow2>
				<Label htmlFor="image">Cabin photo</Label>
				<FileInput id="image" accept="image/*" />
			</FormRow2> */}

			<FormRow>
				{/* type is an HTML attribute! */}
				<Button variation="secondary" type="reset">
					Discard
				</Button>
				<Button disabled={isCreating}>Add Supplier</Button>
			</FormRow>
		</Form>
	);
}

export default CreateSupplierForm;
