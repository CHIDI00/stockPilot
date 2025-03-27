import styled from "styled-components";
import { useUser } from "./useUser";
import { useNavigate } from "react-router-dom";
import { device } from "../utils/devices";

const StyledUserAvatar = styled.div`
	display: flex;
	gap: 1.2rem;
	align-items: center;
	font-weight: 500;
	font-size: 1.4rem;
	color: var(--color-grey-600);

	@media screen and (${device.mobileL}) {
		span {
			display: none;
		}
	}
`;

const Avatar = styled.img`
	display: block;
	width: 4rem;
	width: 3.6rem;
	aspect-ratio: 1;
	object-fit: cover;
	object-position: center;
	border-radius: 50%;
	outline: 2px solid var(--color-grey-100);
	cursor: pointer;
`;

const UserAvatar = () => {
	const navigate = useNavigate();

	const { user } = useUser();
	const { fullName, avatar } = user.user_metadata;

	return (
		<StyledUserAvatar>
			<Avatar
				src={avatar || "user_icon2.png"}
				alt={`Avatar of ${avatar}`}
				onClick={() => navigate("/account")}
			/>
			<span>{fullName}</span>
		</StyledUserAvatar>
	);
};

export default UserAvatar;
