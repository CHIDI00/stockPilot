import React, { useState, useEffect } from "react";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import Row from "../ui/Row";
import CreateOrderForm from "./CreateOrderForm";
import OrderTableOperation from "./OrderTableOperation";
import styled from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";
import useOrder from "./useOrder";
import OrderTable from "./OrderTable";
import Spinner from "../ui/Spinner";
import OrderRow from "./OrderRow";

const Span = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	margin: 0 1rem;
`;

const SearchBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	gap: 1rem;
	margin: 0 2rem;
	padding: 0.7rem 1rem;
	border: 1px solid #7a7979;
	border-radius: 8px;

	input {
		border: none;
		background-color: transparent;
	}
`;

const AddOrder = ({ onSearch }) => {
	const { orders, isLoading } = useOrder();
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [query, setQuery] = useState("");
	const [filteredOrders, setFilteredOrders] = useState([]);

	// Initialize filteredOrders with all orders when orders data is loaded
	useEffect(() => {
		if (orders) {
			setFilteredOrders(orders);
		}
	}, [orders]);

	const handleSearch = (event) => {
		const searchValue = event.target.value.toLowerCase();
		setQuery(searchValue);

		// Pass the search query to the parent component
		if (onSearch) {
			onSearch(searchValue);
		}
	};

	return (
		<div>
			<Row type="horizontal">
				<SearchBar>
					<HiMagnifyingGlass />
					<input
						type="text"
						value={query}
						onChange={handleSearch}
						placeholder="Search by order id"
					/>
				</SearchBar>

				<Button onClick={() => setIsOpenModal((show) => !show)}>
					Add Order
				</Button>

				<Span>
					Filter by:
					<OrderTableOperation />
				</Span>
			</Row>

			<div className="animate__fadeIn">
				{isOpenModal && (
					<Modal onClose={() => setIsOpenModal(false)}>
						<CreateOrderForm onCloseModal={() => setIsOpenModal(false)} />
					</Modal>
				)}
			</div>

			{/* Display filtered orders in the table
			{filteredOrders && filteredOrders.length > 0 ? (
				<div style={{ marginTop: "2rem" }}>
					<CustomOrderTable orders={filteredOrders} isLoading={isLoading} />
				</div>
			) : query ? (
				<div style={{ marginTop: "2rem", textAlign: "center" }}>
					No orders found matching "{query}"
				</div>
			) : null} */}
		</div>
	);
};

export default AddOrder;
