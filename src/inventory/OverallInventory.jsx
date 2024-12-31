import React from "react";
import useOrder from "../orders/useOrder";
import { formatCurrency } from "../utils/helpers";
import styled, { css } from "styled-components";

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
	const { orders, isLoading } = useOrder();

	const confirmed = orders?.filter(
		(item) => item?.status.toLowerCase() === "confirmed"
	).length;

	const returned = orders?.filter(
		(item) => item?.status.toLowerCase() === "returned"
	).length;

	const pending = orders?.filter(
		(item) => item?.status.toLowerCase() === "pending"
	).length;

	const totalConfirmedOrderValue = orders
		?.filter((order) => order.status === "Confirmed")
		.reduce((total, order) => total + order.order_value, 0);

	const totalReturnedOrderValue = orders
		?.filter((order) => order.status === "Returned")
		.reduce((total, order) => total + order.order_value, 0);

	const totalPendingOrderValue = orders
		?.filter((order) => order.status === "Pending")
		.reduce((total, order) => total + order.order_value, 0);

	return (
		<OverallStyled>
			<OverallText>Overall order</OverallText>
			<OverallContent>
				<TotalStyledContainer>
					<Total type="blue">Total Order</Total>
					<p>{isLoading ? "--" : orders?.length}</p>
					<p>Last 7 days</p>
				</TotalStyledContainer>
				<TotalStyledContainer>
					<Total type="green">Total Confirmed</Total>
					<DivContainer>
						<div>
							<p>{isLoading ? "--" : confirmed}</p>
							<p>Last 7 days</p>
						</div>
						<div>
							<p>
								{isLoading ? "--.--" : formatCurrency(totalConfirmedOrderValue)}
							</p>

							<p>Revenue</p>
						</div>
					</DivContainer>
				</TotalStyledContainer>
				<TotalStyledContainer>
					<Total type="red">Total Returned</Total>
					<DivContainer>
						<div>
							<p>{isLoading ? "--" : returned}</p>
							<p>Last 7 days</p>
						</div>
						<div>
							<p>
								{isLoading ? "--.--" : formatCurrency(totalReturnedOrderValue)}
							</p>

							<p>Cost</p>
						</div>
					</DivContainer>
				</TotalStyledContainer>
				<TotalStyledContainer>
					<Total type="orange">On the way</Total>
					<DivContainer>
						<div>
							<p>{isLoading ? "--" : pending}</p>
							<p>Last 7 days</p>
						</div>
						<div>
							<p>
								{isLoading ? "--.--" : formatCurrency(totalPendingOrderValue)}
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
