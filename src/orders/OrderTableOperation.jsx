import SortBy from "../ui/SortBy";
import TableOperations from "../ui/TableOperations";
import Filter from "../ui/Filter";

function OrderTableOperation() {
	return (
		<TableOperations>
			<Filter
				filterField="status"
				options={[
					{ value: "all", label: "All" },
					{ value: "status", label: "Status" },
					{ value: "checked-in", label: "Checked in" },
					{ value: "unconfirmed", label: "Unconfirmed" },
				]}
			/>

			{/* <SortBy
				options={[
					{ value: "startDate-desc", label: "Sort by date (recent first)" },
					{ value: "startDate-asc", label: "Sort by date (earlier first)" },
					{
						value: "totalPrice-desc",
						label: "Sort by amount (high first)",
					},
					{ value: "totalPrice-asc", label: "Sort by amount (low first)" },
				]}
			/> */}
		</TableOperations>
	);
}

export default OrderTableOperation;
