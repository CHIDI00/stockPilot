import React from "react";
import Select from "./Select";
import { useSearchParams } from "react-router-dom";

const SortBy = ({ options }) => {
	const [searchParams, setsearchParams] = useSearchParams();
	const sortBy = searchParams.get("sortBy") || "";

	function handleChange(e) {
		searchParams.set("sortBy", e.target.value);
		setsearchParams(searchParams);
	}

	return (
		<Select
			options={options}
			value={sortBy}
			type="white"
			onChange={handleChange}
		/>
	);
};

export default SortBy;
