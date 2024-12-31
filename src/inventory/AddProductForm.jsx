import Input from "../ui/Input";
import Form from "../ui/Form";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import FormRow from "../ui/FormRow";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { useState } from "react";
import styled from "styled-components";
import { createProduct } from "../services/apiInventory";

const FormButton = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
	gap: 1rem;
	padding-top: 1rem;
`;

function AddProductForm({ onCloseModal }) {
	// GENERATE ORDER ID
	const generateOrderId = () => {
		const prefix = "P";
		const randomNumber = Math.floor(10000 + Math.random() * 90000);
		return prefix + randomNumber;
	};

	const [randomOrderId, setRandomOrderId] = useState(generateOrderId());

	// CEATE ORDER
	const { register, handleSubmit, reset, formState } = useForm();
	const { errors } = formState;

	const queryClient = useQueryClient();

	const { mutate, isLoading: isCreating } = useMutation({
		mutationFn: createProduct,
		onSuccess: () => {
			toast.success("New product have been added"),
				queryClient.invalidateQueries({ queryKey: ["inventory"] }),
				reset();
			onCloseModal?.();
		},
		onError: (err) => toast.error(err.message),
	});

	function onSubmit(data) {
		mutate(data);
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Heading as="h3">Product</Heading>

			<FormRow label="Product Name" error={errors?.product?.message}>
				<Input
					type="text"
					id="products"
					disabled={isCreating}
					{...register("products", {
						required: "This field is required",
					})}
				/>
			</FormRow>

			<FormRow label="Product ID" error={errors?.product?.message}>
				<Input
					type="text"
					id="productID"
					value={randomOrderId}
					disabled={isCreating}
					{...register("productID", {
						required: "This field is required",
					})}
				/>
			</FormRow>

			<FormRow label="Buying Price" error={errors?.order_value?.message}>
				<Input
					type="number"
					id="buyingPrice"
					disabled={isCreating}
					{...register("buyingPrice", {
						required: "This field is required",
						// validate: (value) => value < 1 && "Enter a valid amount",
					})}
				/>
			</FormRow>

			<FormRow label="Quantity" error={errors?.order_value?.message}>
				<Input
					type="number"
					id="quantity"
					disabled={isCreating}
					{...register("quantity", {
						required: "This field is required",
						// validate: (value) => value < 1 && "Enter a valid amount",
					})}
				/>
			</FormRow>

			<FormRow label="Threshold Value" error={errors?.quantity?.message}>
				<Input
					type="text"
					id="thresholdValue"
					disabled={isCreating}
					{...register("thresholdValue", {
						required: "This field is required",
					})}
				/>
			</FormRow>

			<FormRow label="Stock In Date" error={errors?.order_id?.message}>
				<Input
					type="date"
					id="stockDate"
					disabled={isCreating}
					{...register("stockDate", {
						required: "This field is required",
					})}
				/>
			</FormRow>

			<FormRow label="Availability" error={errors?.delivery_date?.message}>
				<Input
					type="text"
					id="availability"
					disabled={isCreating}
					{...register("availability", {
						required: "This field is required",
					})}
				/>
			</FormRow>

			{/* <FormRow label="Status" error={errors?.status?.message}>
				<Input
					type="text"
					id="status"
					value="Pending"
					disabled={isCreating}
					{...register("status", {
						required: "This field is required",
					})}
				/>
			</FormRow> */}

			<FormButton>
				{/* type is an HTML attribute! */}
				<Button variation="secondary" type="reset">
					Discard
				</Button>
				<Button disabled={isCreating}>Add Order</Button>
			</FormButton>
		</Form>
	);
}

export default AddProductForm;
