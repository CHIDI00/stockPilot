import React from "react";
import { formatCurrency } from "../utils/helpers";
import styled, { css } from "styled-components";
import useInventory from "./useInventory";

const OverallStyled = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	background-color: var(--color-grey-50);
	gap: 2rem;
	padding: 1.6rem;
	border-radius: 8px;
`;

const OverallText = styled.p`
	font-weight: 600;
	font-size: 2rem;
	color: var(--color-grey-600);
`;

const OverallContent = styled.div`
	display: grid;
	grid-template-columns: 0.6fr 1fr 1fr 1fr;
`;

const TotalStyledContainer = styled.div`
	line-height: 2;

	&:not(:last-child) {
		border-right: 2px solid var(--color-grey-300);
	}

	&:not(:first-child) {
		padding: 0 3.7rem;
	}
`;

const Total = styled.p`
	font-weight: 600;

	${(prop) =>
		prop.type === "blue" &&
		css`
			color: blue;
		`}

	${(prop) =>
		prop.type === "orange" &&
		css`
			color: orange;
		`}

		${(prop) =>
		prop.type === "green" &&
		css`
			color: green;
		`}

		${(prop) =>
		prop.type === "red" &&
		css`
			color: red;
		`}
`;

const DivContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;
`;

const OverallInventory = () => {
	const { inventories, isLoading } = useInventory();

	const confirmed = inventories?.filter(
		(item) => item?.availability?.toLowerCase() === "in stock"
	).length;

	const returned = inventories?.filter(
		(item) => item?.availability?.toLowerCase() === "low stock"
	).length;

	const pending = inventories?.filter(
		(item) => item?.availability?.toLowerCase() === "Out of stock"
	).length;

	const totalInStockValue = inventories
		?.filter((inventory) => inventory.availability === "in stock")
		.reduce((total, inventory) => total + inventory.buyingPrice, 0);

	const totalLowStockValue = inventories
		?.filter((inventory) => inventory.availability === "Low stock")
		.reduce((total, inventory) => total + inventory.buyingPrice, 0);

	const totalOutOfStockValue = inventories
		?.filter((inventory) => inventory.availability === "Out of stock")
		.reduce((total, inventory) => total + inventory.buyingPrice, 0);

	return (
		<OverallStyled>
			<OverallText>Overall Inventory</OverallText>
			<OverallContent>
				<TotalStyledContainer>
					<Total type="blue">Total Product</Total>
					<p>{isLoading ? "--" : inventories?.length}</p>
					<p>Last 7 days</p>
				</TotalStyledContainer>
				<TotalStyledContainer>
					<Total type="green">In Stock</Total>
					<DivContainer>
						<div>
							<p>{isLoading ? "--" : confirmed}</p>
							<p>Last 7 days</p>
						</div>
						<div>
							<p>{isLoading ? "--.--" : formatCurrency(totalInStockValue)}</p>

							<p>Revenue</p>
						</div>
					</DivContainer>
				</TotalStyledContainer>
				<TotalStyledContainer>
					<Total type="orange">Low stock</Total>
					<DivContainer>
						<div>
							<p>{isLoading ? "--" : returned}</p>
							<p>Last 7 days</p>
						</div>
						<div>
							<p>{isLoading ? "--.--" : formatCurrency(totalLowStockValue)}</p>

							<p>Cost</p>
						</div>
					</DivContainer>
				</TotalStyledContainer>
				<TotalStyledContainer>
					<Total type="red">Out of stock</Total>
					<DivContainer>
						<div>
							<p>{isLoading ? "--" : pending}</p>
							<p>Last 7 days</p>
						</div>
						<div>
							<p>
								{isLoading ? "--.--" : formatCurrency(totalOutOfStockValue)}
							</p>
							<p>Cost</p>
						</div>
					</DivContainer>
				</TotalStyledContainer>
			</OverallContent>
		</OverallStyled>
	);
};

export default OverallInventory;
