import styled from "styled-components";

import Input from "../ui/Input";
import Form from "../ui/Form";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import FormRow from "../ui/FormRow";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { createSupplier } from "../services/apiSupplier";

import toast from "react-hot-toast";
import { createOrders } from "../services/apiOrders";

function CreateOrderForm() {
	const { register, handleSubmit, reset, formState } = useForm();
	// const { errors } = formState;

	// const queryClient = useQueryClient();

	// const { mutate, isLoadding: isCreating } = useMutation({
	// 	mutationFn: createOrders,
	// 	onSuccess: () => {
	// 		toast.success("New order have been added"),
	// 			queryClient.invalidateQueries({ queryKey: ["orders"] }),
	// 			reset();
	// 	},
	// 	onError: (err) => toast.error(err.message),
	// });

	function onSubmit(data) {
		// mutate(data);
		console.log(data);
	}

	// function onError(error) {
	// 	// console.log(error);
	// }

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Heading as="h3">New Order</Heading>

			<FormRow
				label="Product Name"
				// error={errors?.supplierName?.message}
			>
				<Input
					type="text"
					id="product"
					// disabled={isCreating}
					{...register("product", {
						required: "This field is required",
					})}
				/>
			</FormRow>

			<FormRow
				label="Order value"
				// error={errors?.contact?.message}
			>
				<Input
					type="number"
					id="order_value"
					// defaultValue="+234 "
					// disabled={isCreating}
					{...register("order_value", {
						required: "This field is required",
					})}
				/>
			</FormRow>

			<FormRow
				label="Quantity"
				// error={errors?.email?.message}
			>
				<Input
					type="text"
					id="quantity"
					// disabled={isCreating}
					{...register("quantity", {
						required: "This field is required",
						// validate: (value) =>
						// 	!value.includes("@gmail.com") &&
						// 	"Please enter a valid email address",
					})}
				/>
			</FormRow>

			<FormRow
				label="Order Id"
				// error={errors?.email?.message}
			>
				<Input
					type="text"
					id="order_id"
					// disabled={isCreating}
					{...register("order_id", {
						required: "This field is required",
						// validate: (value) =>
						// 	!value.includes("@gmail.com") &&
						// 	"Please enter a valid email address",
					})}
				/>
			</FormRow>

			<FormRow
				label="Delivery Date"
				// error={errors?.email?.message}
			>
				<Input
					type="date"
					id="delivery_date"
					// disabled={isCreating}
					{...register("delivery_date", {
						required: "This field is required",
						// validate: (value) =>
						// 	!value.includes("@gmail.com") &&
						// 	"Please enter a valid email address",
					})}
				/>
			</FormRow>

			<FormRow
				label="Status"
				// error={errors?.email?.message}
			>
				<Input
					type="text"
					id="status"
					// disabled={isCreating}
					{...register("status", {
						required: "This field is required",
						// validate: (value) =>
						// 	!value.includes("@gmail.com") &&
						// 	"Please enter a valid email address",
					})}
				/>
			</FormRow>

			<FormRow>
				{/* type is an HTML attribute! */}
				<Button variation="secondary" type="reset">
					Discard
				</Button>
				<Button
				// disabled={isCreating}
				>
					Add Supplier
				</Button>
			</FormRow>
		</Form>
	);
}

export default CreateOrderForm;
