import React from "react";
import styled from "styled-components";
import Spinner from "../ui/Spinner";
import Pagination from "../ui/Pagination";
import InventoryRow from "./InventoryRow";
import useInventory from "./useInventory";

const Table = styled.div`
	border: 1px solid var(--color-grey-200);

	font-size: 1.15rem;
	background-color: var(--color-grey-0);
	border-radius: 7px;
	overflow: hidden;
`;

const TableHeader = styled.header`
	display: grid;
	grid-template-columns: 1.9fr 2fr 2fr 2fr 2fr 0.2fr;
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

const InventoryTable = () => {
	const { inventories, isLoading, count } = useInventory();

	if (isLoading) return <Spinner />;

	return (
		<Table role="table">
			<TableHeader role="row">
				<div>Product</div>
				<div>Buying Price</div>
				<div>Threshold Value</div>
				<div>Stock In Date</div>
				<div>Availbility</div>
			</TableHeader>

			{inventories?.map((inventory) => (
				<InventoryRow inventory={inventory} key={inventory.id} />
			))}

			{count > 10 && <Pagination count={count} />}
		</Table>
	);
};

export default InventoryTable;
