import styled from "styled-components";
import SupplierTable from "../supply/SupplierTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddSupplier from "../supply/AddSupplier";
import Button from "../ui/Button";
import { useState } from "react";
import { device } from "../utils/devices";
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

	@media screen and (${device.mobileL}) {
		display: none;
	}
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
				<SpanSpan>
					<Heading as="h1">Suppliers</Heading>
					<SpanBtn>
						<Button onClick={() => setIsOpenModal((show) => !show)}>
							Add Supplier
						</Button>
					</SpanBtn>
				</SpanSpan>

				<Span2>
					<AddProduct>
						<AddSupplier
							isOpenModal={isOpenModal}
							setIsOpenModal={setIsOpenModal}
						/>
					</AddProduct>
				</Span2>
			</Row>

			{/* Show on mobile screen */}
			<Span3>
				<AddProduct>
					<AddSupplier
						isOpenModal={isOpenModal}
						setIsOpenModal={setIsOpenModal}
					/>
				</AddProduct>
			</Span3>

			<Row>
				<SupplierTable />
			</Row>
		</>
	);
}

export default Suppliers;
