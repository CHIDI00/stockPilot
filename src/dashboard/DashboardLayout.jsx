import { GiTwoCoins } from "react-icons/gi";
import styled from "styled-components";

const StyledDashboardLayout = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 2rem;
`;

const DashboardContentContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;
	gap: 2rem;
`;

const LeftContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 60%;
	padding: 1rem;
	border-radius: 8px;
	background-color: var(--color-grey-50);
	gap: 2rem;
`;
const RightContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 40%;
	padding: 1rem;
	border-radius: 8px;
	background-color: var(--color-grey-50);
	/* gap: 2rem; */
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
	}
`;

const DashboardDetailsRight = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
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
	}
`;

const DashboardLayout = () => {
	return (
		<StyledDashboardLayout>
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
							<GiTwoCoins />
							<div>
								<p>40,000</p> <p>Revenue</p>
							</div>
						</DashboardDetails>

						<DashboardDetails>
							<GiTwoCoins />
							<div>
								<p>40,000</p> <p>Profit</p>
							</div>
						</DashboardDetails>

						<DashboardDetails>
							<GiTwoCoins />
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
							<GiTwoCoins style={{ color: "green", fontSize: "2.5rem" }} />
							<div>
								<p>40,000</p> <p>Quantity in hand</p>
							</div>
						</DashboardDetailsRight>

						<DashboardDetailsRight>
							<GiTwoCoins style={{ color: "purple", fontSize: "2.5rem" }} />
							<div>
								<p>40,000</p> <p>To be received</p>
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
							<GiTwoCoins />
							<div>
								<p>40,000</p> <p>Revenue</p>
							</div>
						</DashboardDetails>

						<DashboardDetails>
							<GiTwoCoins />
							<div>
								<p>40,000</p> <p>Profit</p>
							</div>
						</DashboardDetails>

						<DashboardDetails>
							<GiTwoCoins />
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
							<GiTwoCoins style={{ color: "green", fontSize: "2.5rem" }} />
							<div>
								<p>40,000</p> <p>Quantity in hand</p>
							</div>
						</DashboardDetailsRight>

						<DashboardDetailsRight>
							<GiTwoCoins style={{ color: "purple", fontSize: "2.5rem" }} />
							<div>
								<p>40,000</p> <p>To be received</p>
							</div>
						</DashboardDetailsRight>
					</DashboardDetailContainer2>
				</RightContentContainer>
			</DashboardContentContainer>
			<DashboardContentContainer>
				<div>sales Overview</div>
				<div>Inventory Summary</div>
			</DashboardContentContainer>
			<DashboardContentContainer>
				<div>sales Overview</div>
				<div>Inventory Summary</div>
			</DashboardContentContainer>
		</StyledDashboardLayout>
	);
};

export default DashboardLayout;
