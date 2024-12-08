import styled, { css } from "styled-components";

import { useState } from "react";
import Modal from "../ui/Modal";
import CreateOrderForm from "./CreateOrderForm";
import { formatCurrency } from "../utils/helpers";

const TableRow = styled.div`
	display: grid;
	grid-template-columns: 0.4fr 1.7fr 1.8fr 1.9fr 1.9fr 1.9fr 1.4fr;
	column-gap: 1.5rem;
	align-items: center;
	padding: 1.2rem 2rem;
	/* text-align: center; */

	&:not(:last-child) {
		border-bottom: 1px solid var(--color-grey-100);
	}
`;

const Image = styled.img`
	display: block;
	width: 40px;
	height: 40px;
	/* aspect-ratio: 3 / 2; */
	object-fit: cover;
	object-position: center;
	transform: scale(1) translateX(-5px);

	border-radius: 50%;
`;

const SupplierName = styled.div`
	font-size: 1.3rem;
	font-weight: 400;
	color: var(--color-grey-600);
	font-family: "Poppins", sans-serif;
	text-transform: capitalize;
`;

const Product = styled.div`
	font-family: "Poppins", sans-serif;
	font-weight: 400;
	font-size: 1.3rem;
`;
const Contact = styled.div`
	font-family: "Poppins", sans-serif;
	font-weight: 400;
	font-size: 1.3rem;
`;

const Email = styled.div`
	font-family: "Poppins", sans-serif;
	font-weight: 400;
	font-size: 1.3rem;
	/* color: var(--color-green-700); */
`;

const Type = styled.div`
	font-family: "Poppins", sans-serif;
	color: red;
	background-color: var(--color-red-100);
	padding: 1px;
	border-radius: 5px;
	text-align: center;
	font-size: 1.3rem;

	${(prop) =>
		prop.type === "Taking Return" &&
		css`
			color: green;
			background-color: var(--color-secondary-100);
		`}
`;

const DeliveryDate = styled.div`
	font-family: "Poppins", sans-serif;
	font-size: 1.3rem;
	padding-left: 1.3rem;
	/* text-align: center; */
`;

const Status = styled.div`
	font-family: "Poppins", sans-serif;
	font-size: 1.3rem;
	padding: 0.4rem 1.2rem;
	background-color: #78777789;
	width: fit-content;
	text-transform: uppercase;
	color: white;
	border-radius: 50px;
`;

const EditDelete = styled.div`
	display: flex;
	gap: 5px;
`;

const ImageContainer = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background-color: black;

	.img {
		width: 100%;
		height: 100%;
	}
`;

const OrderRow = ({ order }) => {
	const [showModal, setShowModal] = useState(false);

	const {
		id: orderId,
		product,
		order_value,
		quantity,
		order_id,
		delivery_date,
		status,
	} = order;

	return (
		<>
			<TableRow role="row">
				<SupplierName>{orderId}</SupplierName>
				<Product>{product}</Product>
				<Contact>{formatCurrency(order_value)}</Contact>
				<Email>{quantity > 1 ? `${quantity} Packs` : `${quantity} Pack`}</Email>
				<Email>{order_id}</Email>
				<DeliveryDate>{delivery_date}</DeliveryDate>
				<Status>{status}</Status>
			</TableRow>

			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<CreateOrderForm onCloseModal={() => setShowModal(false)} />
				</Modal>
			)}
		</>
	);
};

export default OrderRow;
