import React from "react";
import TableOperations from "../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../ui/SortBy";

const SupplierTableOperations = () => {
	return (
		<TableOperations>
			<Filter
			// filterField="return_type"
			// options={[
			// 	{ value: "all", label: "All" },
			// 	{ value: "taking-return", label: "Taking Return" },
			// 	{ value: "not-taking-return", label: "Not Taking Return" },
			// ]}
			/>

			{/* <SortBy
				
			/> */}
		</TableOperations>
	);
};

export default SupplierTableOperations;
