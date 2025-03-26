import React, { useState } from "react";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import Row from "../ui/Row";
import CreateOrderForm from "../orders/CreateOrderForm";
import OrderTableOperation from "../orders/OrderTableOperation";
import styled from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";
import useOrder from "../orders/useOrder";
import AddProductForm from "./AddProductForm";
import { device } from "../utils/devices";

const SearchAndAddProduct = styled.span`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1.6rem;

	@media screen and (${device.mobileL}) {
		width: 100%;
	}
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

	@media screen and (${device.mobileL}) {
		margin: 0;
	}
`;

const AddProduct = () => {
	const { orders } = useOrder();
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [query, setQuery] = useState("");

	const [filteredOrders, setFilteredOrders] = useState(orders);

	const handleSearch = (event) => {
		const searchValue = event.target.value.toLowerCase();
		setQuery(searchValue);
		const filtered = orders.filter((order) =>
			order.order_id.toLowerCase().includes(searchValue)
		);
		setFilteredOrders(filtered);
	};

	return (
		<div>
			{/* <Row type="horizontal"> */}
			<SearchAndAddProduct>
				<SearchBar>
					<HiMagnifyingGlass />
					<input
						type="text"
						value={query}
						onChange={handleSearch}
						placeholder="Search by product name"
					/>
				</SearchBar>

				<Button onClick={() => setIsOpenModal((show) => !show)}>
					Add Product
				</Button>
			</SearchAndAddProduct>

			{/* <Span>
					Filter by:
					<OrderTableOperation />
				</Span> */}
			{/* </Row> */}

			<div className="animate__fadeIn">
				{isOpenModal && (
					<Modal onClose={() => setIsOpenModal(false)}>
						<AddProductForm onCloseModal={() => setIsOpenModal(false)} />
					</Modal>
				)}
			</div>
		</div>
	);
};

export default AddProduct;
