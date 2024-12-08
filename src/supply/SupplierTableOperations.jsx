import TableOperations from "../ui/TableOperations";
import Filter from "../ui/Filter";
import SortBy from "../ui/SortBy";

const SupplierTableOperations = () => {
	return (
		<TableOperations>
			<Filter
				filterField="return_type"
				options={[
					{ value: "all", label: "All" },
					{ value: "taking-return", label: "Taking Return" },
					{ value: "not-taking-return", label: "Not Taking Return" },
				]}
			/>

			<SortBy
				options={[
					{ value: "supplierName-asc", label: "Sort by name (A-Z)" },
					{ value: "supplierName-desc", label: "Sort by name (Z-A)" },
					{ value: "product-asc", label: "Sort by product" },
					{ value: "quantity-asc", label: "Sort by quantity (low first)" },
					{ value: "quantity-desc", label: "Sort by quantity (high first)" },
				]}
			/>
		</TableOperations>
	);
};

export default SupplierTableOperations;
