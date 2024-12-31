import React from "react";
import ProductDetail from "../inventory/ProductDetail";
import styled from "styled-components";

const ProductContainerStyle = styled.div`
	background-color: var(--color-grey-50);
	padding: 3rem;
	border-radius: 8px;
`;
const Product = () => {
	return (
		<ProductContainerStyle>
			<ProductDetail />
		</ProductContainerStyle>
	);
};

export default Product;
