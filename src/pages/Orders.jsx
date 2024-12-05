import styled, { css } from "styled-components";
import OrderTable from "../orders/OrderTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddOrder from "../orders/AddOrder";

const AddOrderStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	margin: 1rem;
`;

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
		prop.type === "purple" &&
		css`
			color: purple;
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

const Orders = () => {
	return (
		<>
			<Row type="horizontal">
				<OverallStyled>
					<OverallText>Overall order</OverallText>
					<OverallContent>
						<TotalStyledContainer>
							<Total type="blue">Total Order</Total>
							<p>37</p>
							<p>Last 7 days</p>
						</TotalStyledContainer>
						<TotalStyledContainer>
							<Total type="orange">Total Receive</Total>
							<DivContainer>
								<div>
									<p>37</p>
									<p>Last 7 days</p>
								</div>
								<div>
									<p>$25000</p>

									<p>Revenue</p>
								</div>
							</DivContainer>
						</TotalStyledContainer>
						<TotalStyledContainer>
							<Total type="purple">Total Returned</Total>
							<DivContainer>
								<div>
									<p>37</p>
									<p>Last 7 days</p>
								</div>
								<div>
									<p>$25000</p>

									<p>Cost</p>
								</div>
							</DivContainer>
						</TotalStyledContainer>
						<TotalStyledContainer>
							<Total type="red">On the way</Total>
							<DivContainer>
								<div>
									<p>37</p>
									<p>Last 7 days</p>
								</div>
								<div>
									<p>$25000</p>
									<p>Cost</p>
								</div>
							</DivContainer>
						</TotalStyledContainer>
					</OverallContent>
				</OverallStyled>
			</Row>

			<Row type="horizontal">
				<Heading as="h1">All Orders</Heading>
				<AddOrderStyle>
					<AddOrder />
				</AddOrderStyle>
			</Row>

			<Row>
				<OrderTable />
			</Row>
		</>
	);
};

export default Orders;
