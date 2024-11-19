import styled, { keyframes } from "styled-components";

const firstRotate = keyframes`
    /* 0%    {transform:scaleY(1)  rotate(0deg)}
    49.99%{transform:scaleY(1)  rotate(135deg)}
    50%   {transform:scaleY(-1) rotate(0deg)}
    100%  {transform:scaleY(-1) rotate(-135deg)} */


    to{transform: rotate(.5turn)}

`;

const Spinner = styled.div`
	margin: 4.8rem auto;

	width: 6.4rem;
	/* width: 50px; */
	--b: 8px;
	aspect-ratio: 1;
	border-radius: 50%;
	background: var(--color-primary-700);
	-webkit-mask: repeating-conic-gradient(
			#0000 0deg,
			#000 1deg 70deg,
			#0000 71deg 90deg
		),
		radial-gradient(
			farthest-side,
			#0000 calc(100% - var(--b) - 1px),
			#000 calc(100% - var(--b))
		);
	-webkit-mask-composite: destination-in;
	mask-composite: intersect;
	animation: ${firstRotate} 1s infinite;
`;

export default Spinner;
