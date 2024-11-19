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
`;

const FilterButton = styled.button`
	background-color: var(--color-grey-0);
	border: none;

	${(props) =>
		props.active &&
		css`
			background-color: var(--color-brand-600);
			color: var(--color-brand-50);
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
`;

const StyleSelect = styled.select`
	border: 1px solid var(--color-grey-100);
	background-color: var(--color-grey-0);
	box-shadow: var(--shadow-sm);
	border-radius: var(--border-radius-sm);
	padding: 1rem 0.5rem;
	display: flex;
	gap: 0.4rem;
	margin-left: 1rem;
`;

import React from "react";
import { useSearchParams } from "react-router-dom";
import { HiFilter } from "react-icons/hi";
import Modal from "./Modal";

const Filter = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	function handleClick(value) {
		searchParams.set("return_type", value);
		setSearchParams(searchParams);
	}

	return (
		<StyledFilter>
			<p>FIlter by: </p>
			<FilterButton onClick={() => handleClick("all")}>All</FilterButton>
			<FilterButton onClick={() => handleClick("taking-return")}>
				Taking Return
			</FilterButton>
			<FilterButton onClick={() => handleClick("not-taking-return")}>
				Not Taking Return
			</FilterButton>
		</StyledFilter>
	);
};

export default Filter;
