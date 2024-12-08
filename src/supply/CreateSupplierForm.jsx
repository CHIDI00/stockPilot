import styled from "styled-components";
import { useForm } from "react-hook-form";

import Input from "../ui/Input";
import Form from "../ui/Form";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import FormRow from "../ui/FormRow";

import { useCreateSupllier } from "./useCreateSupplier";
import { useEditSupplier } from "./useEditSupplier";
import FileInput from "../ui/FileInput";
import { HiCamera, HiMiniCamera } from "react-icons/hi2";
import SmallSpinner from "../ui/SmallSpinner";

const Select = styled.select`
	border: 1px solid var(--color-grey-300);
	background-color: var(--color-grey-0);
	border-radius: var(--color-radius-sm);
	padding: 0.8rem 1.2rem;
	box-shadow: var(--shadow-sm);
`;

const FormButton = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
	gap: 1rem;
	padding-top: 1rem;
`;

const FormImage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

const InputContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	width: 150px;
	height: 150px;
	border: 2px solid var(--color-grey-200);
	border-radius: 50%;
`;

function CreateSupplierForm({ supplierToEdit = {}, onCloseModal }) {
	const { createSupplier, isCreating } = useCreateSupllier();
	const { editSupplier, isEditing } = useEditSupplier();
	const isWorking = isCreating || isEditing;

	const { id: editId, ...editValue } = supplierToEdit;
	const isEditSession = Boolean(editId);

	const { register, handleSubmit, reset, formState } = useForm({
		defaultValues: isEditSession ? editValue : {},
	});
	const { errors } = formState;

	function onSubmit(data) {
		console.log(data);

		if (isEditSession)
			editSupplier(
				{ newSupplierData: { ...data, image: data.image[0] }, id: editId },
				{
					onSuccess: (data) => {
						reset();
						onCloseModal?.();
					},
				}
			);
		else
			createSupplier(
				{ ...data },
				{
					onSuccess: (data) => {
						reset();
						onCloseModal?.();
					},
				}
			);
	}

	function onError(error) {
		console.log(error);
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit, onError)}>
			<Heading as="h3">New Supplier</Heading>

			<FormRow label="Supplier Name" error={errors?.supplierName?.message}>
				{/* <InputErrorContianer> */}
				<Input
					type="text"
					id="supplierName"
					disabled={isWorking}
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
					disabled={isWorking}
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
					disabled={isWorking}
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
					disabled={isWorking}
					{...register("email", {
						required: "This field is required",
						validate: "Please enter a valid email address",
					})}
				/>
				{/* </InputErrorContianer> */}
			</FormRow>

			<FormRow label="Type" error={errors?.return_type?.message}>
				{/* <InputErrorContianer> */}
				<Select
					name="type"
					id="return_type"
					disabled={isWorking}
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
					disabled={isWorking}
					{...register("quantity", {
						required: "This field is required",
					})}
				/>
				{/* </InputErrorContianer> */}
			</FormRow>

			<FormRow label="Photo" error={errors?.image?.message}>
				<FileInput
					id="image"
					accept="image/*"
					{...register("image", {
						required: "This field is required",
					})}
				/>
			</FormRow>

			<FormButton>
				<Button
					variation="secondary"
					type="reset"
					onClick={() => onCloseModal?.()}
				>
					Discard
				</Button>
				<Button disabled={isWorking}>
					{isEditSession ? "Edit supplier" : "Add new supplier"}
				</Button>
			</FormButton>
		</Form>
	);
}

export default CreateSupplierForm;
