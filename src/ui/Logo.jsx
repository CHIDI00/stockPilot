import styled from "styled-components";

const StyledLogo = styled.div`
	text-align: left;
`;

const Img = styled.img`
	height: 3.7rem;
	width: auto;
`;

function Logo() {
	return (
		<StyledLogo>
			<Img src="/logo-dark-abr.png" alt="Logo" />
		</StyledLogo>
	);
}

export default Logo;
