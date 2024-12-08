import React from "react";
import styled from "styled-components";
import Spinner from "../ui/Spinner";
import OrderRow from "./OrderRow";
import Pagination from "../ui/Pagination";
import useOrder from "./useOrder";

import { useSearchParams } from "react-router-dom";

const Table = styled.div`
	border: 1px solid var(--color-grey-200);

	font-size: 1.15rem;
	background-color: var(--color-grey-0);
	border-radius: 7px;
	overflow: hidden;
`;

const TableHeader = styled.header`
	display: grid;
	grid-template-columns: 0.3fr 1.7fr 1.8fr 1.9fr 1.9fr 1.9fr 1.4fr;
	column-gap: 2.4rem;
	align-items: center;

	background-color: var(--color-grey-50);
	border-bottom: 1px solid var(--color-grey-100);
	text-transform: capitalize;
	letter-spacing: 0.4px;
	font-weight: 600;
	color: var(--color-grey-600);
	padding: 1.6rem 2.4rem;
`;

const OrderTable = () => {
	const [searchParams] = useSearchParams();
	const { orders, isLoading, count } = useOrder();

	if (isLoading) return <Spinner />;

	return (
		<Table role="table">
			<TableHeader role="row">
				<div></div>
				<div>Product</div>
				<div>Order Value</div>
				<div>Quantity</div>
				<div>Order ID</div>
				<div>Expected Delivery</div>
				<div>Status</div>
			</TableHeader>

			{orders?.map((order) => (
				<OrderRow order={order} key={order.id} />
			))}

			<Pagination count={count} />
		</Table>
	);
};

export default OrderTable;
