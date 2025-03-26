import React from "react";
import styled from "styled-components";
import Spinner from "../ui/Spinner";
import OrderRow from "./OrderRow";
import Pagination from "../ui/Pagination";
import useOrder from "./useOrder";
import { device } from "../utils/devices";

const Table = styled.div`
	border: 1px solid var(--color-grey-200);

	font-size: 1.15rem;
	background-color: var(--color-grey-0);
	border-radius: 7px;
	overflow: hidden;

	@media screen and (${device.mobileL}) {
		overflow: scroll;
	}
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

	@media screen and (${device.mobileL}) {
		grid-template-columns: 0.5fr 2.1fr 2.1fr 2fr 2fr 2fr 1.5fr;
		padding: 1.2rem 2rem;
		width: 100rem;
	}
`;

const OrderTable = ({ orders: passedOrders, isLoading: passedIsLoading }) => {
	const {
		orders: fetchedOrders,
		isLoading: fetchedIsLoading,
		count,
	} = useOrder();

	// Use passed props if available, otherwise use fetched data
	const orders = passedOrders || fetchedOrders;
	const isLoading =
		passedIsLoading !== undefined ? passedIsLoading : fetchedIsLoading;

	if (isLoading) return <Spinner />;

	return (
		<>
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
			</Table>
			{count > 10 && <Pagination count={count} />}
		</>
	);
};

export default OrderTable;
