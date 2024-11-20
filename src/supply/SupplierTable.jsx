import styled from "styled-components";
import { getSupplier } from "../services/apiSupplier";
import Spinner from "../ui/Spinner";

import SupplierRow from "./SupplyRow";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

const Table = styled.div`
	border: 1px solid var(--color-grey-200);

	font-size: 1.15rem;
	background-color: var(--color-grey-0);
	border-radius: 7px;
	overflow: hidden;

	/* box-shadow: rgba(0, 0, 0, 0.15) 0 2.4px 3.2px; */
`;

const TableHeader = styled.header`
	display: grid;
	grid-template-columns: 0.3fr 1.4fr 1.4fr 1.3fr 2.6fr 1.4fr 0.7fr 0.7fr;
	column-gap: 2.4rem;
	align-items: center;

	background-color: var(--color-grey-50);
	border-bottom: 1px solid var(--color-grey-100);
	text-transform: capitalize;
	letter-spacing: 0.4px;
	font-weight: 600;
	color: var(--color-grey-600);
	padding: 1.6rem 2.4rem;
`;

const SupplierTable = () => {
	const [searchParams] = useSearchParams();

	const {
		isLoading,
		data: Suppliers,
		error,
	} = useQuery({
		queryKey: ["supplier"],
		queryFn: getSupplier,
	});

	// Display loading spinner while fetching data
	if (isLoading) return <Spinner />;

	const filterValue = searchParams.get("return_type") || "all";

	let filtereSupplier = Suppliers;

	if (filterValue === "all") filtereSupplier = Suppliers;

	if (filterValue === "taking-return")
		filtereSupplier = Suppliers.filter(
			(supplier) => supplier.return_type === "Taking Return"
		);

	if (filterValue === "not-taking-return")
		filtereSupplier = Suppliers.filter(
			(supplier) => supplier.return_type === "Not Taking Return"
		);

	return (
		<Table role="table">
			<TableHeader role="row">
				<div></div>
				<div>Supplier Name</div>
				<div>Product</div>
				<div>Contact Number</div>
				<div>Email</div>
				<div>Type</div>
				<div>Quantity</div>
			</TableHeader>
			{filtereSupplier.map((supplier) => (
				<SupplierRow
					supplier={supplier}
					key={supplier.id}
					// data={filtereSupplier}
				/>
			))}
		</Table>
	);
};

export default SupplierTable;
