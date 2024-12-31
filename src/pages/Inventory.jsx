import React from "react";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import OverallInventory from "../inventory/OverallInventory";
import InventoryProduct from "../inventory/InventoryProduct";
import styled from "styled-components";
import AddProduct from "../inventory/AddProduct";

const AddProductStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	margin: 1rem;
`;

const Inventory = () => {
	return (
		<>
			<Row type="horizontal">
				<OverallInventory />
			</Row>

			<Row type="horizontal">
				<Heading as="h1">All Inventory</Heading>
				<AddProductStyle>
					<AddProduct />
				</AddProductStyle>
			</Row>

			<Row>
				<InventoryProduct />
			</Row>
		</>
	);
};

export default Inventory;
