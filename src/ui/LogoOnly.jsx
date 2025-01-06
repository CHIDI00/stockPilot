import styled from "styled-components";

const StyledLogo = styled.div`
	text-align: left;
`;

const Img = styled.img`
	height: 5rem;
	width: auto;
`;

function LogoOnly() {
	return (
		<StyledLogo>
			<Img src="/logo-only.png" alt="Logo" />
		</StyledLogo>
	);
}

export default LogoOnly;
