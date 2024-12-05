import styled from "styled-components";
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

const Orders = () => {
	return (
		<>
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
