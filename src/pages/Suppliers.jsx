import styled from "styled-components";
import SupplierTable from "../supply/SupplierTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddSupplier from "../supply/AddSupplier";
import Button from "../ui/Button";
import { useState } from "react";
import { device } from "../utils/devices";
import Modal from "../ui/Modal";
import CreateSupplierForm from "../supply/CreateSupplierForm";
// import CreateSupplierForm from "../supply/CreateSupplierForm";

const AddProduct = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	margin: 1rem;
`;

const SpanBtn = styled.span`
	display: flex;
`;
const SpanSpan = styled.span`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
`;
const Span2 = styled.span`
	display: flex;

	/* @media screen and (${device.mobileL}) {
		display: none;
	} */
`;
const Span3 = styled.span`
	display: none;

	@media screen and (${device.mobileL}) {
		display: flex;
	}
`;

function Suppliers() {
	const [isOpenModal, setIsOpenModal] = useState(false);

	return (
		<>
			<Row type="horizontal">
				<AddProduct>
					<AddSupplier
						isOpenModal={isOpenModal}
						setIsOpenModal={setIsOpenModal}
					/>
				</AddProduct>
			</Row>

			<Row>
				<SupplierTable />
			</Row>
		</>
	);
}

export default Suppliers;
