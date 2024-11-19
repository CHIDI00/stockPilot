import React from "react";
import styled from "styled-components";

const InventoryProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 190rem;
	/* height: 23rem; */
	background-color: var(--color-grey-50);
	gap: 2rem;
	padding: 2rem;
	border-radius: 8px;
`;

const InventoryProduct = () => {
	return (
		<InventoryProductContainer>
			<div>InventoryProduct</div>
		</InventoryProductContainer>
	);
};

export default InventoryProduct;
