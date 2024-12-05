import React, { useState } from "react";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import Row from "../ui/Row";
import Filter from "../ui/Filter";
import CreateOrderForm from "./CreateOrderForm";

const AddOrder = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);

	return (
		<div>
			<Row type="horizontal">
				<Button onClick={() => setIsOpenModal((show) => !show)}>
					Add Order
				</Button>
				<Filter />
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
