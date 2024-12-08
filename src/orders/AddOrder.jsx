import React, { useState } from "react";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import Row from "../ui/Row";
import CreateOrderForm from "./CreateOrderForm";
import OrderTableOperation from "./OrderTableOperation";
import styled from "styled-components";

const Span = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	margin: 0 1rem;
`;

const AddOrder = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);

	return (
		<div>
			<Row type="horizontal">
				<Button onClick={() => setIsOpenModal((show) => !show)}>
					Add Order
				</Button>
				<Span>
					Filter by:
					<OrderTableOperation />
				</Span>
			</Row>

			{isOpenModal && (
				<Modal onClose={() => setIsOpenModal(false)}>
					<CreateOrderForm onCloseModal={() => setIsOpenModal(false)} />
				</Modal>
			)}
		</div>
	);
};

export default AddOrder;
