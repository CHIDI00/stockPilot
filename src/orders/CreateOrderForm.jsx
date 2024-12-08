import Input from "../ui/Input";
import Form from "../ui/Form";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import FormRow from "../ui/FormRow";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { createOrder } from "../services/apiOrders";
import { useState } from "react";
import styled from "styled-components";

const FormButton = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
	gap: 1rem;
	padding-top: 1rem;
`;

function CreateOrderForm({ onCloseModal }) {
	// GENERATE ORDER ID
	const generateOrderId = () => {
		const prefix = "SP";
		const randomNumber = Math.floor(10000 + Math.random() * 90000);
		return prefix + randomNumber;
	};

	const [randomOrderId, setRandomOrderId] = useState(generateOrderId());

	const handleGenerateNewCode = () => {
		setRandomOrderId(generateOrderId());
	};

	// CEATE ORDER
	const { register, handleSubmit, reset, formState } = useForm({
		defaultValues: isAddSession ? addValue : {},
	});
	const { errors } = formState;

	const queryClient = useQueryClient();

	const { mutate, isLoadding: isCreating } = useMutation({
		mutationFn: createOrder,
		onSuccess: () => {
			toast.success("New order have been added"),
				queryClient.invalidateQueries({ queryKey: ["orders"] }),
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
			<Heading as="h3">New Order</Heading>

			<FormRow label="Product Name" error={errors?.product?.message}>
				<Input
					type="text"
					id="product"
					disabled={isCreating}
					{...register("product", {
						required: "This field is required",
					})}
				/>
			</FormRow>

			<FormRow label="Order value" error={errors?.order_value?.message}>
				<Input
					type="number"
					id="order_value"
					disabled={isCreating}
					{...register("order_value", {
						required: "This field is required",
						// validate: (value) => value < 1 && "Enter a valid amount",
					})}
				/>
			</FormRow>

			<FormRow label="Quantity" error={errors?.quantity?.message}>
				<Input
					type="text"
					id="quantity"
					disabled={isCreating}
					{...register("quantity", {
						required: "This field is required",
					})}
				/>
			</FormRow>

			<FormRow label="Order Id" error={errors?.order_id?.message}>
				<Input
					type="text"
					id="order_id"
					value={randomOrderId}
					disabled={isCreating}
					{...register("order_id", {
						required: "This field is required",
					})}
				/>
			</FormRow>

			<FormRow label="Delivery Date" error={errors?.delivery_date?.message}>
				<Input
					type="date"
					id="delivery_date"
					disabled={isCreating}
					{...register("delivery_date", {
						required: "This field is required",
					})}
				/>
			</FormRow>

			<FormRow label="Status" error={errors?.status?.message}>
				<Input
					type="text"
					id="status"
					disabled={isCreating}
					{...register("status", {
						required: "This field is required",
					})}
				/>
			</FormRow>

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

export default CreateOrderForm;
