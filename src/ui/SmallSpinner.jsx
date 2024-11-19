import styled, { keyframes } from "styled-components";

const Keyframe = keyframes`
 to{transform: rotate(1turn)}
`;

const SmallSpinner = styled.div`
	width: 20px;
	--b: 8px;
	aspect-ratio: 1;
	border-radius: 50%;
	padding: 1px;
	background: conic-gradient(#0000 10%, #dad5d6) content-box;
	-webkit-mask: repeating-conic-gradient(
			#0000 0deg,
			#000 1deg 20deg,
			#0000 21deg 36deg
		),
		radial-gradient(
			farthest-side,
			#0000 calc(100% - var(--b) - 1px),
			#000 calc(100% - var(--b))
		);
	-webkit-mask-composite: destination-in;
	mask-composite: intersect;
	animation: ${Keyframe} 1s infinite steps(10);
`;

export default SmallSpinner;
