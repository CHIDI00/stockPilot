import React from "react";
import Select from "./Select";

const FilterBy = ({ options }) => {
	return <Select options={options} onChange={onChange} />;
};

export default FilterBy;
