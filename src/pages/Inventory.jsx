import React, { useState } from "react";
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
	const [filteredInventories, setFilteredInventories] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");

	// Handle search results from AddProduct component
	const handleSearch = (query, results) => {
		setSearchQuery(query);
		setFilteredInventories(results);
	};

	return (
		<>
			<Row type="horizontal">
				<OverallInventory />
			</Row>

			<Row type="horizontal" screen="mobile">
				<Heading as="h1">All Inventory</Heading>
				<AddProductStyle>
					<AddProduct onSearch={handleSearch} />
				</AddProductStyle>
			</Row>

			<Row>
				{inventories?.length < 1 ? (
					"Start by adding product to your store"
				) : searchQuery && filteredInventories?.length === 0 ? (
					<div style={{ marginTop: "2rem", textAlign: "center" }}>
						No products found matching "{searchQuery}"
					</div>
				) : (
					<InventoryProduct products={searchQuery ? filteredInventories : inventories} />
				)}
			</Row>
		</>
	);
};

export default Inventory;
