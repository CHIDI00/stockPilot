import styled, { css } from "styled-components";
import { device } from "../utils/devices";

const Form = styled.form`
	${(props) =>
		props.type !== "modal" &&
		css`
			padding: 2.4rem 4rem;

			/* Box */
			background-color: var(--color-grey-0);
			/* border: 1px solid var(--color-grey-100); */
			border-radius: var(--border-radius-md);
		`}

	${(props) =>
		props.type === "modal" &&
		css`
			width: 80rem;
		`}
    
  overflow: hidden;
	font-size: 1.4rem;
	width: 60rem;

	@media screen and (${device.mobileL}) {
		width: 100%;
		padding: 0;
	}
`;

export default Form;
