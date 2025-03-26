import styled from "styled-components";
import { device } from "../utils/devices";

const TableOperations = styled.div`
	display: flex;
	align-items: center;
	gap: 1.6rem;

	@media screen and (${device.mobileL}) {
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
		width: 100%;
		font-size: 1.2rem;
	}
`;

export default TableOperations;
