import styled from "styled-components";
import SupplierTable from "../supply/SupplierTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useEffect } from "react";
import { getSupplier } from "../services/apiSupplier";
import { useState } from "react";
import CreateSupplierForm from "../supply/CreateSupplierForm";

const AddProduct = styled.div`
	display: flex;
	gap: 2rem;
	margin: 1rem;
`;

function Suppliers() {
	const [showForm, setShowForm] = useState(false);

	useEffect(function () {
		getSupplier().then((data) => console.log(data));
	}, []);

	return (
		<>
			<Row type="horizontal">
				<Heading as="h1">Suppliers</Heading>
				<AddProduct>
					<button onClick={() => setShowForm((show) => !show)}>
						Add Product
					</button>
					<p>Filter</p>
				</AddProduct>
			</Row>

			<Row>
				<SupplierTable />
				{showForm && <CreateSupplierForm />}
			</Row>
		</>
	);
}

export default Suppliers;
