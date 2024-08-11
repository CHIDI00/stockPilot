import styled, { css } from "styled-components";
// import { formatCurrency } from "../../utils/helpers";

const TableRow = styled.div`
	display: grid;
	grid-template-columns: 1.8fr 1.6fr 2fr 2.2fr 2fr 1fr;
	column-gap: 2.4rem;
	align-items: center;
	padding: 1.4rem 2.4rem;

	&:not(:last-child) {
		border-bottom: 1px solid var(--color-grey-100);
	}
`;

const Img = styled.img`
	display: block;
	width: 6.4rem;
	aspect-ratio: 3 / 2;
	object-fit: cover;
	object-position: center;
	transform: scale(1.5) translateX(-7px);
`;

const SupplierName = styled.div`
	font-size: 1.6rem;
	font-weight: 400;
	color: var(--color-grey-600);
	font-family: "Poppins", sans-serif;
	text-transform: capitalize;
`;

const Contact = styled.div`
	font-family: "Poppins", sans-serif;
	font-weight: 400;
`;

const Email = styled.div`
	font-family: "Poppins", sans-serif;
	font-weight: 400;
	/* color: var(--color-green-700); */
`;

const Type = styled.div`
	font-family: "Poppins", sans-serif;
`;

const Quantity = styled.div`
	font-family: "Poppins", sans-serif;
	color: green;
`;

const SupplierRow = ({ supplier }) => {
	const { supplierName, product, contact, email, type, quantity } = supplier;

	return (
		<TableRow role="row">
			<SupplierName>{supplierName}</SupplierName>
			<div>{product}</div>
			<Contact>{contact}</Contact>
			<Email>{email}</Email>
			<Type>{type}</Type>
			<Quantity>{quantity}</Quantity>
		</TableRow>
	);
};

export default SupplierRow;
