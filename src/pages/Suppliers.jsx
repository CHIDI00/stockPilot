import styled from "styled-components";
import SupplierTable from "../supply/SupplierTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddSupplier from "../supply/AddSupplier";
// import CreateSupplierForm from "../supply/CreateSupplierForm";

const AddProduct = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	margin: 1rem;
`;

function Suppliers() {
	return (
		<>
			<Row type="horizontal">
				<Heading as="h1">Suppliers</Heading>
				<AddProduct>
					<AddSupplier />
				</AddProduct>
			</Row>

			<Row>
				<SupplierTable />
			</Row>
		</>
	);
}

export default Suppliers;
