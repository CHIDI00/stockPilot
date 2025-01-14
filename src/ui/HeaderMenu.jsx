import React from "react";
import styled from "styled-components";
import Logout from "../authentication/Logout";
import ButtonIcon from "./ButtonIcon";

import { useNavigate } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";

const StyleHeaderMenu = styled.ul`
	display: flex;
	gap: 0.4rem;
`;

const HeaderMenu = () => {
	const navigate = useNavigate();

	return (
		<StyleHeaderMenu>
			{/* <li>
				<ButtonIcon onClick={() => navigate("/account")}>
					<HiOutlineUser />
				</ButtonIcon>
			</li> */}
			<li>
				<Logout />
			</li>
		</StyleHeaderMenu>
	);
};

export default HeaderMenu;
