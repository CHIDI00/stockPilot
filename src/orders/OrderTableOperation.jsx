import SortBy from "../ui/SortBy";
import TableOperations from "../ui/TableOperations";
import Filter from "../ui/Filter";

function OrderTableOperation() {
	return (
		<TableOperations>
			{/* <Filter
				filterField="status"
				options={[
					{ value: "all", label: "All" },
					{ value: "confirmed", label: "Confirmed" },
					{ value: "returned", label: "Returned" },
				]}
			/> */}

			<SortBy
				options={[
					{ value: "all", label: "All" },
					{ value: "confirmed", label: "Confirmed" },
					{
						value: "returned",
						label: "Returned",
					},
					{ value: "delayed", label: "Delayed" },
				]}
			/>
		</TableOperations>
	);
}

export default OrderTableOperation;
