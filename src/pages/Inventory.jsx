import React from "react";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import OverallInventory from "../inventory/OverallInventory";
import InventoryProduct from "../inventory/InventoryProduct";
import styled from "styled-components";
import AddProduct from "../inventory/AddProduct";
import useInventory from "../inventory/useInventory";

const AddProductStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	margin: 1rem;
`;

const Inventory = () => {
	const { inventories } = useInventory();
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
				{inventories.length < 1 ? (
					"Start by adding product to your store"
				) : (
					<InventoryProduct />
				)}
			</Row>
		</>
	);
};

export default Inventory;
