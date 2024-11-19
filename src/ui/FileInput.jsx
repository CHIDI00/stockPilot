import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
	font-size: 1.2rem;
	border-radius: var(--border-radius-sm);
	/* opacity: 0; */

	&::file-selector-button {
		/* position: absolute;
		top: 0%;
		left: 0%; */
		font: inherit;
		font-weight: 500;
		padding: 0.8rem 1.2rem;
		margin-right: 1.2rem;
		color: var(--color-grey-50);
		border: none;
		border-radius: var(--border-radius-sm);
		background-color: var(--color-brand-60);
		cursor: pointer;
		transition: color 0.2s, background-color 0.2s;
		/* transform: scale(9); */

		&:hover {
			background-color: var(--color-brand-70);
		}
	}
`;

export default FileInput;
