import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledAppLayout = styled.div`
	display: grid;
	grid-template-columns: 24rem 1fr;
	grid-template-rows: auto 1fr;
	height: 97.5vh;

	gap: 0.8rem;
`;

const Main = styled.main`
	padding: 4rem 4.8rem 6.4rem;
	background-color: var(--color-grey-0);
	border-radius: 15px;
	overflow-y: scroll;

	scrollbar-width: none;
`;

const Container = styled.div`
	max-width: 120rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 3rem;
`;

const AppLayout = () => {
	return (
		<StyledAppLayout>
			<Header />
			<SideBar />

			<Main>
				<Container>
					<Outlet />
				</Container>
			</Main>
		</StyledAppLayout>
	);
};

export default AppLayout;
