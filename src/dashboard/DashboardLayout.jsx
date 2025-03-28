import styled from "styled-components";
import DashboardFilter from "./DashboardFilter";
import { userCurrentOrder } from "./useCurrentOrder";
import Spinner from "../ui/Spinner";
import useOrder from "../orders/useOrder";
import { formatCurrency } from "../utils/helpers";
import {
	HiOutlineBanknotes,
	HiOutlineArchiveBox,
	HiOutlineExclamationCircle,
} from "react-icons/hi2";
import { TbTruckReturn } from "react-icons/tb";
import { GoPackageDependents } from "react-icons/go";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { device } from "../utils/devices";
import TopProductsChart from "./TopProductsChart";
import SalesChart from "./SalesChart";
import { useEditSupplier } from "../supply/useEditSupplier";
import useInventory from "../inventory/useInventory";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineTag } from "react-icons/hi";
import RecentOrderRow from "./RecentOrderRow";

const StyledDashboardLayout = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 2rem;
	overflow: hidden;
`;

const DashboardContentContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;
	gap: 2rem;

	@media screen and (${device.mobileL}) {
		flex-direction: column;
	}
`;
const DashboardContentContainerRecentOrde = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;
	gap: 2rem;

	@media screen and (${device.mobileL}) {
		flex-direction: column;
	}
`;

const DashboardChartContentContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;
	gap: 2rem;

	@media screen and (${device.tablet}) {
		flex-direction: column;
	}
`;

const LeftContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 60%;
	padding: 1rem;
	border-radius: 8px;
	background-color: var(--color-grey-50);
	gap: 2rem;

	@media screen and (${device.mobileL}) {
		width: 100%;
		font-size: 1.5rem;
	}
	@media screen and (${device.mobileM}) {
		font-size: 1.2rem;
	}
`;
const RecentOrderContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 1rem;
	border-radius: 8px;
	background-color: var(--color-grey-50);
	gap: 2rem;

	@media screen and (${device.mobileL}) {
		width: 100%;
		font-size: 1.5rem;
	}
	@media screen and (${device.mobileM}) {
		font-size: 1.2rem;
	}
`;
const LeftChartContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 60%;
	padding: 1rem;
	border-radius: 8px;
	background-color: var(--color-grey-50);
	gap: 2rem;

	div {
		width: 100%;
	}

	@media screen and (${device.tablet}) {
		width: 100%;
		font-size: 1.5rem;
	}
	@media screen and (${device.mobileM}) {
		font-size: 1.2rem;
	}
`;
const RightContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 40%;
	padding: 1rem;
	border-radius: 8px;
	background-color: var(--color-grey-50);
	animation-duration: 0.8s;
	/* gap: 2rem; */

	@media screen and (${device.mobileL}) {
		width: 100%;
		font-size: 1.5rem;
	}
	@media screen and (${device.mobileM}) {
		font-size: 1.2rem;
	}
`;
const RightChartContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 40%;
	padding: 1rem;
	border-radius: 8px;
	background-color: var(--color-grey-50);
	/* gap: 2rem; */

	@media screen and (${device.tablet}) {
		width: 80%;
	}
	@media screen and (${device.mobileL}) {
		width: 100%;
		font-size: 1.5rem;
	}
	@media screen and (${device.mobileM}) {
		font-size: 1.2rem;
	}
`;

const DashboardDetailContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	align-items: center;
	gap: 1rem;
`;

const DashboardDetailContainer2 = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	gap: 1rem;
`;

const DashboardDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	padding: 1rem;

	&:not(:last-child) {
		border-right: 2px solid var(--color-grey-300);
	}

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;

		p {
			font-size: 1.3rem;
		}
	}

	@media screen and (${device.mobileL}) {
		padding: 0.3rem;
		div {
			flex-direction: column;
		}

		p {
			font-size: 1rem;
		}
	}
`;

const DashboardDetailsRight = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	padding: 1rem;

	&:not(:last-child) {
		border-right: 2px solid var(--color-grey-300);
	}

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;

		p {
			font-size: 1.3rem;
		}
	}
`;

const LastDayDataContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const DashboardLayout = () => {
	const { isLoading, orders, numDays } = userCurrentOrder();
	const { orders: totalOrders } = useOrder();
	const { suppliers } = useEditSupplier();
	const { inventories } = useInventory();

	const numberOfOrders = totalOrders?.length;

	const totalOrderValue = totalOrders
		?.filter((order) => order.status === "Confirmed")
		.reduce((total, order) => total + order.order_value, 0);

	const totalReturnedOrder = totalOrders
		?.filter((order) => order.status === "Returned")
		.reduce((total, order) => total + order.order_value, 0);

	const totalPendingOrder = totalOrders
		?.filter((order) => order.status === "Pending")
		.reduce((total, order) => total + order.order_value, 0);

	// Calculate total inventory value
	const totalInventoryValue =
		inventories?.reduce(
			(total, inventory) => total + inventory.buyingPrice * inventory.quantity,
			0
		) || 0;

	// Calculate profit (inventory value - order value, minimum 0)
	const profit = Math.max(0, totalInventoryValue - totalOrderValue);

	// Sales is the same as confirmed orders
	const sales = totalOrderValue;

	// Calculate number of unique products (as a proxy for categories)
	const uniqueProducts = inventories
		? new Set(inventories.map((item) => item.products)).size
		: 0;

	if (isLoading) return <Spinner />;

	return (
		<StyledDashboardLayout>
			<DashboardContentContainer>
				<LeftContentContainer>
					<p>Purchase Overview</p>
					<DashboardDetailContainer>
						<DashboardDetails>
							<BiPurchaseTagAlt
								style={{
									color: "blue",
									fontSize: "4rem",
									padding: "0.7rem",
									backgroundColor: "lightBlue",
									borderRadius: "50%",
								}}
							/>
							<div>
								<p>{numberOfOrders}</p> <p>Purchase</p>
							</div>
						</DashboardDetails>

						<DashboardDetails>
							<HiOutlineBanknotes
								style={{
									color: "green",
									fontSize: "4rem",
									padding: "0.7rem",
									backgroundColor: "lightGreen",
									borderRadius: "50%",
								}}
							/>
							<div>
								<p>{formatCurrency(totalOrderValue)}</p> <p>Cost</p>
							</div>
						</DashboardDetails>

						<DashboardDetails>
							<GoPackageDependents
								style={{
									color: "orangeRed",
									fontSize: "4rem",
									padding: "0.7rem",
									backgroundColor: "orange",
									borderRadius: "50%",
								}}
							/>
							<div>
								<p>{totalPendingOrder}</p> <p>Pending</p>
							</div>
						</DashboardDetails>

						<DashboardDetails>
							<TbTruckReturn
								style={{
									color: "red",
									fontSize: "4rem",
									padding: "0.7rem",
									borderRadius: "50%",
									backgroundColor: "#f97676",
								}}
							/>
							<div>
								<p>{totalReturnedOrder}</p> <p>Return</p>
							</div>
						</DashboardDetails>
					</DashboardDetailContainer>
				</LeftContentContainer>

				<RightContentContainer>
					<p>Product Summary</p>
					<DashboardDetailContainer2>
						<DashboardDetailsRight>
							<HiOutlineUserGroup
								style={{ color: "green", fontSize: "2.5rem" }}
							/>
							<div>
								<p>{suppliers?.length}</p> <p>Number of suppliers</p>
							</div>
						</DashboardDetailsRight>

						<DashboardDetailsRight>
							<HiOutlineTag style={{ color: "purple", fontSize: "2.5rem" }} />
							<div>
								<p>{uniqueProducts}</p> <p>Number of products</p>
							</div>
						</DashboardDetailsRight>
					</DashboardDetailContainer2>
				</RightContentContainer>
			</DashboardContentContainer>

			<DashboardContentContainer>
				<LeftContentContainer>
					<p>sales Overview</p>
					<DashboardDetailContainer>
						<DashboardDetails>
							<HiOutlineBanknotes
								style={{
									color: "blue",
									fontSize: "4rem",
									padding: "0.7rem",
									backgroundColor: "lightBlue",
									borderRadius: "50%",
								}}
							/>
							<div>
								<p>{formatCurrency(sales)}</p> <p>Sales</p>
							</div>
						</DashboardDetails>

						<DashboardDetails>
							<BiPurchaseTagAlt
								style={{
									color: "green",
									fontSize: "4rem",
									padding: "0.7rem",
									backgroundColor: "lightGreen",
									borderRadius: "50%",
								}}
							/>
							<div>
								<p>{formatCurrency(sales)}</p> <p>Revenue</p>
							</div>
						</DashboardDetails>

						<DashboardDetails>
							<HiOutlineArchiveBox
								style={{
									color: "purple",
									fontSize: "4rem",
									padding: "0.7rem",
									backgroundColor: "#e6d8f0",
									borderRadius: "50%",
								}}
							/>
							<div>
								<p>{formatCurrency(profit)}</p> <p>Profit</p>
							</div>
						</DashboardDetails>

						<DashboardDetails>
							<GoPackageDependents
								style={{
									color: "orangeRed",
									fontSize: "4rem",
									padding: "0.7rem",
									backgroundColor: "orange",
									borderRadius: "50%",
								}}
							/>
							<div>
								<p>{formatCurrency(totalOrderValue)}</p> <p>Cost</p>
							</div>
						</DashboardDetails>
					</DashboardDetailContainer>
				</LeftContentContainer>

				<RightContentContainer>
					<p>Inventory Summary</p>
					<DashboardDetailContainer2>
						<DashboardDetailsRight>
							<HiOutlineArchiveBox
								style={{ color: "green", fontSize: "2.5rem" }}
							/>
							<div>
								<p>
									{formatCurrency(
										inventories
											?.filter((inventory) => inventory.quantity > 10)
											.reduce(
												(total, inventory) => total + inventory.buyingPrice,
												0
											) || 0
									)}
								</p>
								<p>In-stock value</p>
							</div>
						</DashboardDetailsRight>

						<DashboardDetailsRight>
							<HiOutlineExclamationCircle
								style={{ color: "orange", fontSize: "2.5rem" }}
							/>
							<div>
								<p>
									{formatCurrency(
										inventories
											?.filter(
												(inventory) =>
													inventory.quantity <= 10 && inventory.quantity > 0
											)
											.reduce(
												(total, inventory) => total + inventory.buyingPrice,
												0
											) || 0
									)}
								</p>
								<p>Low-stock value</p>
							</div>
						</DashboardDetailsRight>
					</DashboardDetailContainer2>
				</RightContentContainer>
			</DashboardContentContainer>

			<DashboardChartContentContainer>
				<LeftChartContentContainer>
					<LastDayDataContainer>
						<p>Sales & Purchase</p>
						<DashboardFilter />
					</LastDayDataContainer>

					<div>
						<SalesChart orders={orders} numberOfDays={numDays} />
					</div>
				</LeftChartContentContainer>
				<RightChartContentContainer>
					<TopProductsChart orders={orders} />
				</RightChartContentContainer>
			</DashboardChartContentContainer>

			<DashboardContentContainerRecentOrde>
				<RecentOrderContentContainer>
					<p>Recent Orders</p>
					{totalOrders && totalOrders.length > 0 ? (
						<Table role="table">
							<TableHeader role="row">
								<div>Product</div>
								<div>Order Value</div>
								<div>Order ID</div>
								<div>Created Date</div>
								<div>Status</div>
							</TableHeader>

							{/* Sort orders by created_at and display only the 5 most recent ones */}
							{[...totalOrders]
								.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
								.slice(0, 5)
								.map((order) => (
									<RecentOrderRow key={order.id} order={order} />
								))}
						</Table>
					) : (
						<p>No recent orders found</p>
					)}
				</RecentOrderContentContainer>
			</DashboardContentContainerRecentOrde>
		</StyledDashboardLayout>
	);
};

export default DashboardLayout;

const Table = styled.div`
	border: 1px solid var(--color-grey-200);
	font-size: 1.15rem;
	background-color: var(--color-grey-0);
	border-radius: 7px;
	overflow: hidden;

	@media screen and (${device.mobileL}) {
		overflow: scroll;
	}
`;

const TableHeader = styled.header`
	display: grid;
	grid-template-columns: 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr;
	column-gap: 2.4rem;
	align-items: center;

	background-color: var(--color-grey-50);
	border-bottom: 1px solid var(--color-grey-100);
	text-transform: capitalize;
	letter-spacing: 0.4px;
	font-weight: 600;
	color: var(--color-grey-600);
	padding: 1.6rem 2.4rem;

	@media screen and (${device.mobileL}) {
		grid-template-columns: 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr;
		padding: 1.2rem 2rem;
		width: 100rem;
	}
`;
