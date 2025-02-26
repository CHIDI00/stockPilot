import styled from "styled-components";

const StyledLogo = styled.div`
	text-align: left;
`;

const Img = styled.img`
	height: 5rem;
	width: auto;

	animation: l1 0.7s linear infinite alternate;

	@keyframes l1 {
		to {
			opacity: 0;
		}
	}
`;

function LogoOnly() {
	return (
		<StyledLogo>
			<Img src="/logo-only.png" alt="Logo" />
		</StyledLogo>
	);
}

export default LogoOnly;
