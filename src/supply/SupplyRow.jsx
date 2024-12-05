import styled, { css } from "styled-components";
import Button from "../ui/Button";

import { HiMiniPencilSquare, HiTrash } from "react-icons/hi2";
import { useState } from "react";
import CreateSupplierForm from "./CreateSupplierForm";
import { useDeleteSupplier } from "./useDeleteSupplier";
import user_icon3 from "/user_icon3.png";
import Modal from "../ui/Modal";
import ConfirmDelete from "../ui/ConfirmDelete";

const TableRow = styled.div`
	display: grid;
	grid-template-columns: 0.4fr 1.4fr 1.4fr 1.3fr 2.6fr 1.4fr 0.7fr 0.7fr;
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
	/* padding: 5px; */
	border-radius: 5px;
	/* text-align: center; */
	font-size: 1.3rem;
	width: fit-content;
	padding: 0.4rem 1.2rem;

	${(prop) =>
		prop.type === "Taking Return" &&
		css`
			color: green;
			background-color: var(--color-secondary-100);
		`}
`;

const Quantity = styled.div`
	font-family: "Poppins", sans-serif;
	font-size: 1.3rem;
	padding-left: 1.3rem;
	/* text-align: center; */
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

const SupplierRow = ({ supplier }) => {
	const [showModal, setShowModal] = useState(false);
	const [confirmDelete, setConfirmDelete] = useState(false);

	const {
		id: supplierId,
		supplierName,
		product,
		contact,
		email,
		return_type,
		quantity,
		image,
	} = supplier;

	const { isDeleting, deleteSupplier } = useDeleteSupplier();

	return (
		<>
			<TableRow role="row">
				{/* <ImageContainer> */}
				<Image
					className="img"
					src={!image ? user_icon3 : image}
					alt="profile"
				/>
				{/* </ImageContainer> */}
				<SupplierName>{supplierName}</SupplierName>
				<Product>{product}</Product>
				<Contact>{contact}</Contact>
				<Email>{email}</Email>
				<Type type={return_type}>{return_type}</Type>
				<Quantity>{quantity}</Quantity>
				<EditDelete>
					{/* <Modal> */}
					<Button
						onClick={() => setShowModal((show) => !show)}
						variation="transparent"
						size="transparent"
					>
						<HiMiniPencilSquare />
					</Button>
					{/* </Modal> */}

					<Button
						variation="transparent"
						size="transparent"
						onClick={() => setConfirmDelete((show) => !show)}
						disabled={isDeleting}
					>
						<HiTrash style={{ color: "var(--color-red-2)" }} />
					</Button>
				</EditDelete>
			</TableRow>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<CreateSupplierForm
						onCloseModal={() => setShowModal(false)}
						supplierToEdit={supplier}
					/>
				</Modal>
			)}

			{confirmDelete && (
				<Modal onClose={() => setConfirmDelete(false)}>
					<ConfirmDelete
						resourceName="supplier"
						disabled={isDeleting}
						onConfirm={() => deleteSupplier(supplierId)}
						onClose={() => setConfirmDelete(false)}
					/>
				</Modal>
			)}
		</>
	);
};

export default SupplierRow;
