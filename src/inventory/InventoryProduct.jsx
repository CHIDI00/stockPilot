import React from "react";
import styled from "styled-components";
import InventoryTable from "./InventoryTable";
import { device } from "../utils/devices";
import useInventory from "./useInventory";

const InventoryProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 190rem;
	/* height: 23rem; */
	background-color: var(--color-grey-50);
	gap: 2rem;
	padding: 2rem;
	border-radius: 8px;

	@media screen and (${device.mobileL}) {
		max-width: 100%;
		padding: 1rem;
	}
`;

const InventoryProduct = ({ products }) => {
	// If products prop is not provided, use the hook to get all products
	const { inventories, isLoading } = useInventory();
	const displayProducts = products || inventories;
	
	return (
		<InventoryProductContainer>
			<div>Products</div>
			<InventoryTable products={displayProducts} isLoading={isLoading} />
		</InventoryProductContainer>
	);
};

export default InventoryProduct;
