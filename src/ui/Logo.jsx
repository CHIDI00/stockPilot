import styled from "styled-components";

const StyledLogo = styled.div`
	text-align: left;
`;

const Img = styled.img`
	height: 4.05rem;
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
