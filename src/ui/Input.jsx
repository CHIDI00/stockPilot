import styled from "styled-components";
import { device } from "../utils/devices";

const Input = styled.input`
	border: 1px solid var(--color-grey-300);
	background-color: var(--color-grey-0);
	border-radius: var(--color-radius-sm);
	padding: 0.8rem 1.2rem;
	box-shadow: var(--shadow-sm);
	border-radius: 10px;

	@media screen and (${device.mobileL}) {
		width: 100%;
	}
`;

export default Input;
