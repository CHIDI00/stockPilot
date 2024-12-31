import SortBy from "../ui/SortBy";
import TableOperations from "../ui/TableOperations";
import Filter from "../ui/Filter";
import FilterOrderBy from "../ui/FilterOrderBy";

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

			<FilterOrderBy
				filterField="status"
				options={[
					{ value: "all", label: "All" },
					{ value: "confirmed", label: "Confirmed" },
					{
						value: "returned",
						label: "Returned",
					},
					{ value: "pending", label: "Pending" },
				]}
			/>
		</TableOperations>
	);
}

export default OrderTableOperation;
