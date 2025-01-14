import styled, { css } from "styled-components";

const ButtonIcon = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	background: none;
	border: none;
	padding: 0.6rem;
	border-radius: var(--border-radius-sm);
	transition: all 0.2s;

	&:hover {
		background-color: var(--color-grey-100);
	}

	& svg {
		width: 2.2rem;
		height: 2.2rem;
	}

	${(props) =>
		props.type === "redColor" &&
		css`
			color: var(--color-red-2);
		`}
`;

export default ButtonIcon;
