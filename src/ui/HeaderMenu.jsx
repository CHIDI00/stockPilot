import React from "react";
import styled from "styled-components";
import Logout from "../authentication/Logout";

const StyleHeaderMenu = styled.ul`
	display: flex;
	gap: 0.4rem;
`;

const HeaderMenu = () => {
	return (
		<StyleHeaderMenu>
			<li>
				<Logout />
			</li>
		</StyleHeaderMenu>
	);
};

export default HeaderMenu;
