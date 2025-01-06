import styled from "styled-components";
import { useUser } from "../authentication/useUser";
import Spinner from "./Spinner";
import Logo from "./Logo";
import LogoOnly from "./LogoOnly";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
	height: 100vh;
	background-color: var(--color-grey-50);
	display: flex;
	justify-content: center;
	align-items: center;
`;
const ProtectedRoute = ({ children }) => {
	const navigate = useNavigate();

	// 1. Load the authenticated user
	const { isLoading, isAuthenticated } = useUser();

	// 2. If the user is not authenticated, redirect to the login page
	useEffect(() => {
		if (!isAuthenticated && !isLoading) navigate("/login");
	}, [isAuthenticated, isLoading, navigate]);

	// 3. While loading, display a loading spinner
	if (isLoading) {
		return (
			<FullPage>
				<LogoOnly />
			</FullPage>
		);
	}

	// 4. If the user is authenticated, render app
	if (isAuthenticated) return children;
};

export default ProtectedRoute;
