import styled from "styled-components";

const StyledErrorFallback = styled.main`
	height: 97vh;
	background-color: var(--color-grey-50);
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Box = styled.div`
	/* Box */
	padding: 2rem;
	flex: 0 1 96rem;
	text-align: center;

	& h1 {
		margin-bottom: 0.3rem;
		font-size: 20rem;
		color: var(--color-grey-400);
		line-height: 1;
		text-shadow: 2px -60px 0 var(--color-grey-100);
	}

	& p {
		color: var(--color-grey-500);
	}

	@media screen and (${device.mobileL}) {
		& h1 {
			font-size: 10rem;
			text-shadow: 2px -40px 0 rgba(0, 0, 0, 0.1);
		}
	}
`;

import React from "react";
import Heading from "./Heading";
import { device } from "../utils/devices";
import GlobalStyle from "../styles/GlobalStyle";
// import { useMoveBack } from "../hooks/useMoveBack";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
	return (
		<>
			<GlobalStyle />
			<StyledErrorFallback>
				<Box>
					<Heading as="h1">404</Heading>
					<p>ooops! chief. 🤦‍♂️ Something went wrong.</p>
					<p>{error.message}</p>
					<button
						onClick={resetErrorBoundary}
						style={{
							backgroundColor: "var(--color-brand-90)",
							color: "white",
							border: "none",
							padding: "0.8rem 1.6rem",
							borderRadius: "var(--border-radius-sm)",
							cursor: "pointer",
							fontWeight: "500",
							marginTop: "1rem",
						}}
					>
						Back to home
					</button>
				</Box>
			</StyledErrorFallback>
		</>
	);
};

export default ErrorFallback;
