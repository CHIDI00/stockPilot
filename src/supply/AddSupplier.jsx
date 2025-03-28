import React, { useState } from "react";
import CreateSupplierForm from "./CreateSupplierForm";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import Row from "../ui/Row";
import SupplierTableOperations from "./SupplierTableOperations";
import styled from "styled-components";
import { device } from "../utils/devices";
import Heading from "../ui/Heading";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	gap: 2rem;
	padding: 0.5rem;

	@media screen and (${device.mobileL}) {
		flex-direction: column;
		align-items: stretch;
		gap: 1rem;
	}
`;
const FilterForWideScreen = styled.span`
	display: flex;

	@media screen and (${device.mobileL}) {
		display: none;
	}
`;
const FilterForSmallScreen = styled.span`
	display: none;

	@media screen and (${device.mobileL}) {
		display: flex;
	}
`;
const AddSupplier = ({ isOpenModal, setIsOpenModal }) => {
	return (
		<Container>
			<Row type="horizontal">
				<Heading as="h1">Suppliers</Heading>
				{/* <SpanBtn> */}
				<Button onClick={() => setIsOpenModal((show) => !show)}>
					Add Supplier
				</Button>
				{/* </SpanBtn> */}

				<FilterForWideScreen>
					<SupplierTableOperations />
				</FilterForWideScreen>
			</Row>

			{isOpenModal && (
				<Modal onClose={() => setIsOpenModal(false)}>
					<CreateSupplierForm onCloseModal={() => setIsOpenModal(false)} />
				</Modal>
			)}
			<FilterForSmallScreen>
				<SupplierTableOperations />
			</FilterForSmallScreen>
		</Container>
	);
};

export default AddSupplier;
