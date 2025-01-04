import React from "react";
import styled from "styled-components";

const StyledFormRow = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 0.8rem;

	&:first-child {
		padding-top: 0;
	}

	&:last-child {
		padding-bottom: 0;
	}

	&:has(button) {
		display: flex;
		justify-content: flex-end;
		gap: 1rem;
	}
`;

const Label = styled.label`
	font-weight: 500;
	font-size: 1.2rem;
`;

const Error = styled.span`
	font-size: 1.2rem;
	color: var(--color-red-700);
`;

const Select = styled.select`
	border: 1px solid var(--color-grey-300);
	background-color: var(--color-grey-0);
	border-radius: var(--color-radius-sm);
	padding: 0.8rem 1.2rem;
	box-shadow: var(--shadow-sm);
`;

const InputErrorContianer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
`;

const FormRowVertical = ({ label, error, children }) => {
	return (
		<StyledFormRow>
			{label && <Label htmlFor={children.props.id}>{label}</Label>}
			<InputErrorContianer>
				{children}
				{error && <Error>{error}</Error>}
			</InputErrorContianer>
		</StyledFormRow>
	);
};

export default FormRowVertical;
