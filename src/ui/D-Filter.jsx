import styled, { css } from "styled-components";

const StyledFilter = styled.div`
	box-shadow: var(--shadow-sm);
	border-radius: var(--border-radius-sm);
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.4rem;
	margin-left: 1rem;
	width: auto;
	border: 2px solid red;
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
	font-size: 1.1rem;
	/* To give the same height as select */
	padding: 0.44rem 0.8rem;
	transition: all 0.3s;

	&:hover:not(:disabled) {
		background-color: var(--color-brand-600);
		color: var(--color-brand-50);
	}
`;

import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = ({ filterField, options }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const currentFilter = searchParams.get(filterField) || options?.at(0)?.value;

	function handleClick(value) {
		searchParams.set(filterField, value);
		setSearchParams(searchParams);
	}

	return (
		<StyledFilter>
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
		</StyledFilter>
	);
};

export default Filter;
