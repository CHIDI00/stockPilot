import styled, { css } from "styled-components";

import { useState } from "react";
// import Modal from "../ui/Modal";
// import CreateOrderForm from "./CreateOrderForm";
import { formatCurrency } from "../utils/helpers";
import AddProductForm from "./AddProductForm";
import { HiEye } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
// import Inventory from "../pages/Inventory";

const TableRow = styled.div`
	display: grid;
	grid-template-columns: 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr 0.2fr;
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

const OrderId = styled.div`
	font-size: 1.4rem;
	font-weight: 400;
	color: var(--color-grey-600);
	font-family: "Poppins", sans-serif;
	text-transform: capitalize;
`;

const Product = styled.div`
	font-family: "Poppins", sans-serif;
	font-weight: 400;
	font-size: 1.4rem;
`;
const Contact = styled.div`
	font-family: "Poppins", sans-serif;
	font-weight: 400;
	font-size: 1.4rem;
`;

const Email = styled.div`
	font-family: "Poppins", sans-serif;
	font-weight: 400;
	font-size: 1.4rem;
	/* color: var(--color-green-700); */
`;

const Type = styled.div`
	font-family: "Poppins", sans-serif;
	color: red;
	background-color: var(--color-red-100);
	padding: 1px;
	border-radius: 5px;
	text-align: center;
	font-size: 1.4rem;

	${(prop) =>
		prop.type === "Taking Return" &&
		css`
			color: green;
			background-color: var(--color-secondary-100);
		`}
`;

const DeliveryDate = styled.div`
	font-family: "Poppins", sans-serif;
	font-size: 1.4rem;
	padding-left: 1.3rem;
	/* text-align: center; */
`;

const DetailIcon = styled.div`
	font-size: 2rem;
	cursor: pointer;
`;

const Status = styled.div`
	font-family: "Poppins", sans-serif;
	font-size: 1rem;
	padding: 0.4rem 1rem;
	background-color: #78777789;
	width: fit-content;
	text-transform: uppercase;
	color: #000;
	border-radius: 50px;

	${(prop) =>
		prop.type === "Confirmed" &&
		css`
			background-color: #9bfa9b;
			color: #035c03;
		`}
	${(prop) =>
		prop.type === "Returned" &&
		css`
			background-color: #f79090;
			color: #940101;
		`}
	${(prop) =>
		prop.type === "Pending" &&
		css`
			background-color: #facc76;
			color: #6b4704;
		`}
`;

const InventoryRow = ({ inventory }) => {
	const [showModal, setShowModal] = useState(false);
	const navigate = useNavigate();

	const {
		id: productId,
		products,
		buyingPrice,
		thresholdValue,
		stockDate,
		availability,
	} = inventory;

	return (
		<>
			<TableRow role="row">
				<Product>{products}</Product>
				<Contact>{formatCurrency(buyingPrice)}</Contact>
				<Email>
					{thresholdValue > 1
						? `${thresholdValue} Packs`
						: `${thresholdValue} Pack`}
				</Email>
				<DeliveryDate>{stockDate}</DeliveryDate>
				<Status type={availability}>{availability}</Status>
				<DetailIcon onClick={() => navigate(`/inventory/${productId}`)}>
					<HiEye />
				</DetailIcon>
			</TableRow>

			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<AddProductForm onCloseModal={() => setShowModal(false)} />
				</Modal>
			)}
		</>
	);
};

export default InventoryRow;
