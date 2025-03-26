import styled, { css } from "styled-components";
import { device } from "../utils/devices";

const Heading = styled.h1`
	${(props) =>
		props.as === "h1" &&
		css`
			font-size: 2.6rem;
			font-weight: 600;
		`}

	${(props) =>
		props.as === "h2" &&
		css`
			font-size: 2rem;
			font-weight: 600;
		`}

	${(props) =>
		props.as === "h3" &&
		css`
			font-size: 2rem;
			font-weight: 500;
		`}

	line-height: 1.4;

	@media screen and (${device.mobileL}) {
		${(props) =>
			props.as === "h1" &&
			css`
				font-size: 2rem;
				font-weight: 600;
			`}
	}
`;

export default Heading;
