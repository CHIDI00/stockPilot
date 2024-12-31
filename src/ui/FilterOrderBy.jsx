import React from "react";
import Select from "./Select";
import { useSearchParams } from "react-router-dom";

const FilterOrderBy = ({ options }) => {
	const [searchParams, setsearchParams] = useSearchParams();
	const filterBy = searchParams.get("filterBy") || "";

	function handleChange(e) {
		searchParams.set("filterBy", e.target.value);
		setsearchParams(searchParams);
	}

	return (
		<Select
			options={options}
			value={filterBy}
			type="white"
			onChange={handleChange}
		/>
	);
};

export default FilterOrderBy;
