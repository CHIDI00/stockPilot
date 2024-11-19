import React, { useState } from "react";
import CreateSupplierForm from "./CreateSupplierForm";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import Row from "../ui/Row";
import Filter from "../ui/Filter";

const AddSupplier = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);

	return (
		<div>
			<Row type="horizontal">
				<Button onClick={() => setIsOpenModal((show) => !show)}>
					Add Supplier
				</Button>
				<Filter />
			</Row>

			{isOpenModal && (
				<Modal onClose={() => setIsOpenModal(false)}>
					<CreateSupplierForm onCloseModal={() => setIsOpenModal(false)} />
				</Modal>
			)}
		</div>
	);
};

export default AddSupplier;
