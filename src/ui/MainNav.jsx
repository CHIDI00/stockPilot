import styled from "styled-components";
import {
	HiOutlineCog6Tooth,
	HiOutlineHome,
	HiMiniQueueList,
	HiOutlineUserCircle,
	HiOutlineShoppingCart,
	HiOutlineDocumentText,
	HiOutlineChartBar,
} from "react-icons/hi2";

const NavList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
	&:link,
	&:visited {
		display: flex;
		align-items: center;
		gap: 1rem;

		color: var(--color-grey-600);
		font-size: 1.5rem;
		font-weight: 500;
		padding: 1rem 2rem;
		transition: all 0.3s;
	}

	/* This works because react-router places the active class on the active NavLink */
	&:hover {
		color: var(--color-primary-800);
		background-color: var(--color-grey-100);
	}
	&:active,
	&.active:link,
	&.active:visited {
		background-color: var(--color-grey-0);

		box-shadow: var(--color-primary-600) 0px 6px 0px;

		color: var(--color-primary-800);
		border-radius: 6px;
		border: 2px solid var(--color-primary-600);
	}

	& svg {
		width: 2rem;
		height: 2rem;
		color: var(--color-grey-400);
		transition: all 0.3s;
	}

	&:hover svg,
	&:active svg,
	&.active:link svg,
	&.active:visited svg {
		color: var(--color-brand-600);
	}
`;

import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = () => {
	return (
		<div>
			<NavList>
				<li>
					<StyledNavLink to="/dashboard">
						<HiOutlineHome />
						<span>Dashboard</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/inventory">
						<HiMiniQueueList />
						<span>Inventory</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/reports">
						<HiOutlineDocumentText />
						<span>Reports</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/suppliers">
						<HiOutlineUserCircle />
						<span>Suppliers</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/orders">
						<HiOutlineShoppingCart />
						<span>Orders</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/manageStore">
						<HiOutlineChartBar />
						<span>Manage Store</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/settings">
						<HiOutlineCog6Tooth />
						<span>Settings</span>
					</StyledNavLink>
				</li>
			</NavList>
		</div>
	);
};

export default MainNav;
