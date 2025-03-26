import styled, { css } from "styled-components";
import OrderTable from "../orders/OrderTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddOrder from "../orders/AddOrder";

import { OverallOrder } from "../orders/OverallOrder";
import useOrder from "../orders/useOrder";
import { useState, useEffect } from "react";
import { device } from "../utils/devices";

const AddOrderStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	margin: 1rem;

	@media screen and (${device.mobileL}) {
		margin: 0;
		justify-content: space-between;
		align-items: flex-start;
		width: 100%;
	}
`;

const Orders = () => {
	const { orders, isLoading } = useOrder();

	// State for filtered orders from search
	const [filteredOrders, setFilteredOrders] = useState([]);
	const [query, setQuery] = useState("");

	// Initialize filteredOrders with all orders when orders data is loaded
	useEffect(() => {
		if (orders) {
			setFilteredOrders(orders);
		}
	}, [orders]);

	// Function to handle search query updates from AddOrder component
	const handleSearch = (searchQuery) => {
		setQuery(searchQuery);

		if (searchQuery.trim() === "") {
			setFilteredOrders(orders);
		} else {
			const filtered = orders.filter((order) =>
				order.order_id.toLowerCase().includes(searchQuery.toLowerCase())
			);
			setFilteredOrders(filtered);
		}
	};

	return (
		<>
			<Row type="horizontal">
				<OverallOrder />
			</Row>

			<Row type="horizontal" screen="mobile">
				<Heading as="h1">All Orders</Heading>
				<AddOrderStyle>
					<AddOrder onSearch={handleSearch} />
				</AddOrderStyle>
			</Row>

			<Row>
				{orders?.length < 1 ? (
					"Add order"
				) : (
					<>
						{filteredOrders && filteredOrders.length > 0 ? (
							<OrderTable orders={filteredOrders} isLoading={isLoading} />
						) : query ? (
							<div style={{ marginTop: "2rem", textAlign: "center" }}>
								No orders found matching "{query}"
							</div>
						) : (
							<OrderTable />
						)}
					</>
				)}
			</Row>
		</>
	);
};

export default Orders;
