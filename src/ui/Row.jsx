import styled, { css } from "styled-components";
import { device } from "../utils/devices";

const Row = styled.div`
	display: flex;

	${(props) =>
		props.type === "horizontal" &&
		css`
			width: 100%;
			justify-content: space-between;
			align-items: center;
		`}

	${(props) =>
		props.type === "vertical" &&
		css`
			flex-direction: column;
			gap: 1.6rem;
		`} 

		@media screen and (${device.mobileL}) {
		${(props) =>
			props.screen === "mobile" &&
			css`
				width: 100%;
				flex-direction: column;
				justify-content: flex-start;
				align-items: flex-start;
				gap: 1.3rem;
			`}
	}
`;

Row.defaultProps = {
	type: "vertical",
};

export default Row;
