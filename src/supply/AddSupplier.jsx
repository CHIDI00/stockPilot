import React, { useState } from "react";
import CreateSupplierForm from "./CreateSupplierForm";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import Row from "../ui/Row";
import SupplierTableOperations from "./SupplierTableOperations";
import styled from "styled-components";
import { device } from "../utils/devices";

const SpanBtn = styled.span`
	display: flex;

	@media screen and (${device.mobileL}) {
		display: none;
	}
`;
const AddSupplier = ({ isOpenModal, setIsOpenModal }) => {
	return (
		<div>
			<Row type="horizontal">
				<SpanBtn>
					<Button onClick={() => setIsOpenModal((show) => !show)}>
						Add Supplier
					</Button>
				</SpanBtn>

				<SupplierTableOperations />
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
