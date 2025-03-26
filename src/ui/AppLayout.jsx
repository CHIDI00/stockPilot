import React, { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import styled, { css } from "styled-components";
import { device } from "../utils/devices";

const StyledAppLayout = styled.div`
	display: grid;
	grid-template-columns: 24rem 1fr;
	grid-template-rows: auto 1fr;
	height: 97.5vh;

	gap: 0.8rem;

	@media ${device.tablet} {
		grid-template-columns: 1fr;
		grid-template-rows: auto auto 1fr;
	}
`;

const Main = styled.main`
	padding: 4rem 4.8rem 6.4rem;
	background-color: var(--color-grey-0);
	border-radius: 15px;
	overflow-y: scroll;

	scrollbar-width: none;

	@media ${device.tablet} {
		grid-column: 1;
		grid-row: 3;
		padding: 3rem;
	}
	@media ${device.mobileL} {
		padding: 0.5rem;
	}
`;

const Container = styled.div`
	max-width: 120rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 3rem;

	@media ${device.mobileL} {
		max-width: 100%;
	}
`;

const StyledHeader = styled.div`
	@media ${device.tablet} {
		grid-column: 1;
		grid-row: 1;
	}
`;

const AppLayout = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen((open) => !open);
	};

	return (
		<StyledAppLayout>
			<StyledHeader>
				<Header onToggleSidebar={toggleSidebar} />
			</StyledHeader>
			<SideBar isOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />

			<Main>
				<Container>
					<Outlet />
				</Container>
			</Main>
		</StyledAppLayout>
	);
};

export default AppLayout;
