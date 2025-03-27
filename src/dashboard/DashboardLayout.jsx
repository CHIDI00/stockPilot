import { GiTwoCoins } from "react-icons/gi";
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
							<GiTwoCoins style={{ color: "green", fontSize: "2.5rem" }} />
							<div>
								<p>{suppliers?.length}</p> <p>Number of suppliers</p>
							</div>
						</DashboardDetailsRight>

						<DashboardDetailsRight>
							<GiTwoCoins style={{ color: "purple", fontSize: "2.5rem" }} />
							<div>
								<p>40,000</p> <p>Number of categories</p>
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
							<GiTwoCoins style={{ color: "green", fontSize: "2.5rem" }} />
							<div>
								<p>40,000</p> <p>Sales</p>
							</div>
						</DashboardDetails>

						<DashboardDetails>
							<GiTwoCoins style={{ color: "green", fontSize: "2.5rem" }} />
							<div>
								<p>40,000</p> <p>Revenue</p>
							</div>
						</DashboardDetails>

						<DashboardDetails>
							<GiTwoCoins style={{ color: "green", fontSize: "2.5rem" }} />
							<div>
								<p>40,000</p> <p>Profit</p>
							</div>
						</DashboardDetails>

						<DashboardDetails>
							<GiTwoCoins style={{ color: "green", fontSize: "2.5rem" }} />
							<div>
								<p>40,000</p> <p>Cost</p>
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
			{/* <DashboardContentContainer>
				<div>sales Overview</div>
				<div>Inventory Summary</div>
			</DashboardContentContainer> */}
		</StyledDashboardLayout>
	);
};

export default DashboardLayout;
