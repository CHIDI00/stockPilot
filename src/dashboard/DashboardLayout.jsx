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
	align-items: center;
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
`;
const RightContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 40%;
	padding: 1rem;
	border-radius: 8px;
	background-color: var(--color-grey-50);
`;

const DashboardDetailContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const DashboardLayout = () => {
	return (
		<StyledDashboardLayout>
			<DashboardContentContainer>
				<LeftContentContainer>
					<p>sales Overview</p>
					<DashboardDetailContainer>
						<div>
							<GiTwoCoins />
							<div>
								<p>40,000</p> <p>Sales</p>
							</div>
						</div>

						<div>
							<GiTwoCoins />
							<div>
								<p>40,000</p> <p>Sales</p>
							</div>
						</div>

						<div>
							<GiTwoCoins />
							<div>
								<p>40,000</p> <p>Sales</p>
							</div>
						</div>

						<div>
							<GiTwoCoins />
							<div>
								<p>40,000</p> <p>Sales</p>
							</div>
						</div>
					</DashboardDetailContainer>
				</LeftContentContainer>
				<RightContentContainer>
					<p>Inventory Summary</p>
					<div>
						<div>
							<GiTwoCoins />
							<div>
								<p>40,000</p> <p>Sales</p>
							</div>
						</div>

						<div>
							<GiTwoCoins />
							<div>
								<p>40,000</p> <p>Sales</p>
							</div>
						</div>
					</div>
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
			<DashboardContentContainer>
				<div>sales Overview</div>
				<div>Inventory Summary</div>
			</DashboardContentContainer>
		</StyledDashboardLayout>
	);
};

export default DashboardLayout;
