// import { useQuery } from "@tanstack/react-query";
// import { TbReplaceFilled } from "react-icons/tb";
import styled from "styled-components";
import { getSupplier } from "../services/apiSupplier";
import Spinner from "../../src/ui/spinner";
import SupplierRow from "./SupplyRow";
import { useQuery } from "@tanstack/react-query";

const Table = styled.div`
	border: 1px solid var(--color-grey-200);

	font-size: 1.4rem;
	background-color: var(--color-grey-0);
	border-radius: 7px;
	overflow: hidden;
`;

const TableHeader = styled.header`
	display: grid;
	grid-template-columns: 1.8fr 1.6fr 2fr 2.2fr 2fr 1fr;
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
	const {
		isLoading,
		data: Suppliers,
		error,
	} = useQuery({
		queryKey: ["supplier"],
		queryFn: getSupplier,
	});

	if (isLoading) return <Spinner />;

	return (
		<Table role="table">
			<TableHeader role="row">
				<div>Supplier Name</div>
				<div>Product</div>
				<div>Contact Number</div>
				<div>Email</div>
				<div>Type</div>
				<div>Quantity</div>
			</TableHeader>
			{Suppliers.map((supplier) => (
				<SupplierRow supplier={supplier} key={supplier.id} />
			))}
		</Table>
	);
};

export default SupplierTable;
