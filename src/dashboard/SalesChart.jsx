import styled from "styled-components";
import DashboardBox from "./DashboardBox";
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import { useDarkMode } from "../context/DarkModeContext";
import { eachDayOfInterval } from "date-fns/fp";
import { isSameDay, subDays, format } from "date-fns";
import { device } from "../utils/devices";

const StyledSalesChart = styled(DashboardBox)`
	grid-column: 1 / -1;
	width: 100%;
	height: 300px;
	display: flex;

	/* Hack to change grid line colors */
	& .recharts-cartesian-grid-horizontal line,
	& .recharts-cartesian-grid-vertical line {
		stroke: var(--color-grey-300);
	}

	& .recharts-responsive-container {
		width: 100% !important;
	}

	@media screen and (${device.mobileL}) {
		height: 200px !important;

		& .recharts-responsive-container {
			width: 100% !important;
			font-size: 1.1rem;
		}
	}
`;

const SalesChart = ({ orders, numberOfDays }) => {
	const { isDarkMode } = useDarkMode();

	// Compute Data structure for each date
	const allDates = eachDayOfInterval({
		start: subDays(new Date(), numberOfDays - 1),
		end: new Date(),
	});

	const data = allDates.map((date) => {
		return {
			label: format(date, "MMM dd"),
			order_value: orders
				.filter((order) => isSameDay(date, new Date(order.created_at)))
				.reduce((acc, cur) => acc + cur.order_value, 0),

			totalSales: orders
				.filter(
					(order) =>
						order.status === "Confirmed" &&
						isSameDay(date, new Date(order.created_at))
				)
				.reduce((acc, cur) => acc + cur.order_value, 0),
		};
	});

	console.log(allDates);

	const colors = isDarkMode
		? {
				order_value: { stroke: "#4f46e5", fill: "#4f46e5" },
				totalSale: { stroke: "#22c55e", fill: "#22c55e" },
				text: "#ffffff",
				background: "#18212f",
		  }
		: {
				order_value: { stroke: "#4f46e5", fill: "#c7d2fe" },
				totalSale: { stroke: "#16a34a", fill: "#dcfce7" },
				text: "#374151",
				background: "#fff",
		  };
	return (
		<StyledSalesChart>
			<ResponsiveContainer height="100%" width="100%">
				<AreaChart data={data}>
					<XAxis
						dataKey="label"
						tick={{ fill: colors.text }}
						tickLine={{ stroke: colors.text }}
					/>
					<YAxis
						unit="₦"
						tick={{ fill: colors.text }}
						tickLine={{ stroke: colors.text }}
					/>
					<CartesianGrid strokeDasharray={4} />
					<Tooltip contentStyle={{ backgroundColor: colors.background }} />
					<Area
						type="monotone"
						dataKey="order_value"
						stroke={colors.order_value.stroke}
						fill={colors.order_value.fill}
						strokeWidth={2}
						name="Total Purchase"
						unit="₦"
					/>
					<Area
						type="monotone"
						dataKey="totalSale"
						stroke={colors.totalSale.stroke}
						fill={colors.totalSale.fill}
						strokeWidth={2}
						name="Total Sales"
						unit="₦"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</StyledSalesChart>
	);
};

export default SalesChart;
