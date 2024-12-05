import styled, { css } from "styled-components";
// import Button from "../ui/Button";

import { useState } from "react";
// import CreateSupplierForm from "./CreateSupplierForm";
// import { useDeleteSupplier } from "./useDeleteSupplier";
// import Modal from "../ui/Modal";
// import ConfirmDelete from "../ui/ConfirmDelete";

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
	const [confirmDelete, setConfirmDelete] = useState(false);

	const {
		id: orderId,
		product,
		order_value,
		quantity,
		order_id,
		delivery_date,
		status,
	} = order;

	// const { isDeleting, deleteSupplier } = useDeleteSupplier();

	return (
		<>
			<TableRow role="row">
				{/* </ImageContainer> */}
				<SupplierName>{orderId}</SupplierName>
				<Product>{product}</Product>
				<Contact>{`$${order_value}.00`}</Contact>
				<Email>{quantity}</Email>
				<Email>{order_id}</Email>
				<DeliveryDate>{delivery_date}</DeliveryDate>
				<Status>{status}</Status>
				{/* <EditDelete> */}
				{/* <Modal> */}
				{/* <Button
						onClick={() => setShowModal((show) => !show)}
						variation="transparent"
						size="transparent"
					>
						<HiMiniPencilSquare />
					</Button> */}
				{/* </Modal> */}

				{/* <Button
						variation="transparent"
						size="transparent"
						onClick={() => setConfirmDelete((show) => !show)}
						disabled={isDeleting}
					>
						<HiTrash style={{ color: "var(--color-red-2)" }} />
					</Button>
				</EditDelete> */}
			</TableRow>
			{/* {showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<CreateSupplierForm
						onCloseModal={() => setShowModal(false)}
						supplierToEdit={supplier}
					/>
				</Modal>
			)} */}

			{/* {confirmDelete && (
				<Modal onClose={() => setConfirmDelete(false)}>
					<ConfirmDelete
						resourceName="supplier"
						disabled={isDeleting}
						onConfirm={() => deleteSupplier(supplierId)}
						onClose={() => setConfirmDelete(false)}
					/>
				</Modal>
			)} */}
		</>
	);
};

export default OrderRow;
