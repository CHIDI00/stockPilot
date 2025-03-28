import styled, { css } from "styled-components";
import { formatCurrency } from "../utils/helpers";
import { device } from "../utils/devices";

const TableRow = styled.div`
	display: grid;
	grid-template-columns: 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr;
	column-gap: 1.5rem;
	align-items: center;
	padding: 1.2rem 2rem;

	&:not(:last-child) {
		border-bottom: 1px solid var(--color-grey-100);
	}

	@media screen and (${device.mobileL}) {
		grid-template-columns: 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr;
		padding: 1.2rem 2rem;
		width: 100rem;
	}
`;

const Product = styled.div`
	font-family: "Poppins", sans-serif;
	font-weight: 400;
	font-size: 1.3rem;
`;

const OrderValue = styled.div`
	font-family: "Poppins", sans-serif;
	font-weight: 400;
	font-size: 1.3rem;
`;

const OrderId = styled.div`
	font-family: "Poppins", sans-serif;
	font-weight: 400;
	font-size: 1.3rem;
`;

const DeliveryDate = styled.div`
	font-family: "Poppins", sans-serif;
	font-size: 1.3rem;
	padding-left: 1.3rem;
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

const RecentOrderRow = ({ order }) => {
	const { created_at, product, order_value, order_id, delivery_date, status } =
		order;

	return (
		<TableRow role="row">
			<Product>{product}</Product>
			<OrderValue>{formatCurrency(order_value)}</OrderValue>
			<OrderId>{order_id}</OrderId>
			<DeliveryDate>{delivery_date}</DeliveryDate>
			<Status type={status}>{status}</Status>
		</TableRow>
	);
};

export default RecentOrderRow;
