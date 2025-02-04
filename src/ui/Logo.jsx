import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
	text-align: left;
`;

const Img = styled.img`
	height: 3.7rem;
	width: auto;
`;

function Logo() {
	const { isDarkMode } = useDarkMode();
	const src = isDarkMode ? "/logo-light-abr.png" : "/logo-dark-abr.png";

	return (
		<StyledLogo>
			<Img src={src} alt="Logo" />
		</StyledLogo>
	);
}

export default Logo;
