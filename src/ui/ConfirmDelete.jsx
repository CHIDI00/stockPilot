import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import { device } from "../utils/devices";

const StyledConfirmDelete = styled.div`
	width: 40rem;
	display: flex;
	flex-direction: column;
	gap: 1.2rem;

	& p {
		color: var(--color-grey-500);
		margin-bottom: 1.2rem;
		font-size: 1.9rem;
	}

	& div {
		display: flex;
		justify-content: flex-end;
		gap: 1.2rem;
	}

	@media screen and (${device.mobileL}) {
		width: 100%;

		& p {
			font-size: 1.2rem;
		}

		& div {
			width: 100%;

			gap: 1.2rem;
		}
	}
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onClose }) {
	return (
		<StyledConfirmDelete>
			<Heading as="h3">Delete {resourceName}</Heading>
			<p>Do you want to delete this {resourceName} permanently?.</p>

			<div>
				<Button variation="secondary" disabled={disabled} onClick={onClose}>
					Cancel
				</Button>
				<Button variation="danger" disabled={disabled} onClick={onConfirm}>
					Yes
				</Button>
			</div>
		</StyledConfirmDelete>
	);
}

export default ConfirmDelete;
