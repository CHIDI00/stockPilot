import React from "react";
import Heading from "../ui/Heading";
import styled from "styled-components";

const OverallContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 190rem;
	background-color: var(--color-grey-50);
	gap: 2rem;
	padding: 2rem;
	border-radius: 8px;
`;
const OverallTitle = styled.h3`
	font-weight: 700;
	font-size: 2rem;
`;

const OverallDetails = styled.div`
	display: grid;
	grid-template-columns: 0.8fr 1fr 1fr 1fr;
`;

const Categories = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 1rem;

	border-right: 1px solid var(--color-grey-300);

	padding: auto;
`;
const CategoriesTitle = styled.p`
	font-family: "Poppins", sans-serif;
	font-size: 2rem;
	font-weight: 700;
	color: var(--color-primary-700);
`;

const TotalProducts = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 1rem;
	border-right: 1px solid var(--color-grey-300);

	padding: 0 3rem;
`;
const TotalProductsTitle = styled.p`
	font-family: "Poppins", sans-serif;
	font-size: 2rem;
	font-weight: 700;
	color: var(--color-yellow-700);
`;

const TotalProductPrice = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;
const TotalProductDays = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const TopSelling = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 1rem;
	border-right: 1px solid var(--color-grey-300);

	padding: 0 3rem;
`;
const TopSellingTitle = styled.p`
	font-family: "Poppins", sans-serif;
	font-size: 2rem;
	font-weight: 700;
	color: var(--color-blue-700);
`;

const TopSellingPrice = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;
const TopSellingDays = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const LowStocks = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 1rem;

	padding: 0 3rem;
`;
const LowStocksTitle = styled.p`
	font-family: "Poppins", sans-serif;
	font-size: 2rem;
	font-weight: 700;
	color: var(--color-red-700);
`;

const LowStocksPrice = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;
const LowStocksDays = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const OverallInventory = () => {
	return (
		<OverallContainer>
			<OverallTitle as="h3">Overall Inventory</OverallTitle>
			<OverallDetails>
				<Categories>
					<CategoriesTitle>Categories</CategoriesTitle>
					<div>14</div>
					<p>Last 7 days</p>
				</Categories>

				<TotalProducts>
					<TotalProductsTitle>Total Products</TotalProductsTitle>
					<TotalProductPrice>
						<p>866</p>
						<p>₹25000</p>
					</TotalProductPrice>
					<TotalProductDays>
						<p>Last 7 days</p>
						<p>Revenue</p>
					</TotalProductDays>
				</TotalProducts>

				<TopSelling>
					<TopSellingTitle>Top Selling</TopSellingTitle>
					<TopSellingPrice>
						<p>5</p>
						<p>₹2500</p>
					</TopSellingPrice>
					<TopSellingDays>
						<p>Last 7 days</p>
						<p>Cost</p>
					</TopSellingDays>
				</TopSelling>

				<LowStocks>
					<LowStocksTitle>Low Stocks</LowStocksTitle>
					<LowStocksPrice>
						<p>12</p>
						<p>2</p>
					</LowStocksPrice>
					<LowStocksDays>
						<p>Ordered</p>
						<p>Not in stock</p>
					</LowStocksDays>
				</LowStocks>
			</OverallDetails>
		</OverallContainer>
	);
};

export default OverallInventory;
