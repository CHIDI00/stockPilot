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

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 60%;
	padding: 1rem;
	background-color: var(--color-grey-50);
`;
// const StyledDashboardLayout = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr;
//   grid-template-rows: auto 34rem auto;
//   gap: 2.4rem;
// `;

const DashboardLayout = () => {
	return (
		<StyledDashboardLayout>
			<DashboardContentContainer>
				<ContentContainer>
					<p>sales Overview</p>
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
				</ContentContainer>
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
			<DashboardContentContainer>
				<div>sales Overview</div>
				<div>Inventory Summary</div>
			</DashboardContentContainer>
		</StyledDashboardLayout>
	);
};

export default DashboardLayout;
