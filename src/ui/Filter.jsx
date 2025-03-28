import styled, { css } from "styled-components";

const StyledFilter = styled.div`
	border: 1px solid var(--color-grey-100);
	background-color: var(--color-grey-0);
	box-shadow: var(--shadow-sm);
	border-radius: var(--border-radius-sm);
	padding: 0.5rem 0.8rem;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.4rem;
	margin-left: 1rem;

	@media screen and (${device.mobileL}) {
		margin: 0;
	}
`;

const FilterButton = styled.button`
	background-color: var(--color-grey-0);
	border: none;

	${(props) =>
		props.active &&
		css`
			background-color: var(--color-primary-600);
			color: var(--color-grey-50);
		`}

	border-radius: var(--border-radius-sm);
	font-weight: 500;
	font-size: 1.4rem;
	/* To give the same height as select */
	padding: 0.44rem 0.8rem;
	transition: all 0.3s;

	&:hover:not(:disabled) {
		background-color: var(--color-brand-600);
		color: var(--color-brand-50);
	}

	@media screen and (${device.mobileL}) {
		font-size: 1.2rem;
	}
`;

import React from "react";
import { useSearchParams } from "react-router-dom";
import { device } from "../utils/devices";

const Filter = ({ filterField, options }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const currentFilter = searchParams.get(filterField) || options?.at(0)?.value;

	function handleClick(value) {
		searchParams.set(filterField, value);
		setSearchParams(searchParams);
	}

	return (
		<StyledFilter>
			<p>FIlter by: </p>
			{/* <FilterButton onClick={() => handleClick("all")}>All</FilterButton>
			<FilterButton onClick={() => handleClick("taking-return")}>
				Taking Return
			</FilterButton>
			<FilterButton onClick={() => handleClick("not-taking-return")}>
				Not Taking Return
			</FilterButton> */}

			{options?.map((options) => (
				<FilterButton
					onClick={() => handleClick(options.value)}
					key={options.value}
					active={options.value === currentFilter}
					disabled={options.value === currentFilter}
				>
					{options.label}
				</FilterButton>
			))}

			{/* <SortBy
				options={[
					{ value: "supplierName-asc", label: "Sort by name (A-Z)" },
					{ value: "supplierName-desc", label: "Sort by name (Z-A)" },
					{ value: "product-asc", label: "Sort by product" },
					{ value: "quantity-asc", label: "Sort by quantity (low first)" },
					{ value: "quantity-desc", label: "Sort by quantity (high first)" },
				]}
			/> */}
		</StyledFilter>
	);
};

export default Filter;
