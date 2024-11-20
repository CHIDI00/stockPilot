import React from "react";
import TableOperations from "../ui/TableOperations";
import Filter from "../../ui/Filter";

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
		</TableOperations>
	);
};

export default SupplierTableOperations;
