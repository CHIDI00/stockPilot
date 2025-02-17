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

const StyledSalesChart = styled(DashboardBox)`
	grid-column: 1 / -1;

	/* Hack to change grid line colors */
	& .recharts-cartesian-grid-horizontal line,
	& .recharts-cartesian-grid-vertical line {
		stroke: var(--color-grey-300);
	}
`;

const fakeData = [
	{ label: "Jan 09", order_value: 480, totalSale: 100 },
	{ label: "Jan 10", order_value: 580, totalSale: 580 },
	{ label: "Jan 11", order_value: 550, totalSale: 550 },
	{ label: "Jan 12", order_value: 600, totalSale: 600 },
	{ label: "Jan 13", order_value: 700, totalSale: 20 },
	{ label: "Jan 14", order_value: 800, totalSale: 800 },
	{ label: "Jan 15", order_value: 700, totalSale: 700 },
	{ label: "Jan 16", order_value: 650, totalSale: 150 },
	{ label: "Jan 17", order_value: 600, totalSale: 400 },
	{ label: "Jan 18", order_value: 550, totalSale: 650 },
	{ label: "Jan 19", order_value: 700, totalSale: 200 },
	{ label: "Jan 20", order_value: 800, totalSale: 200 },
	{ label: "Jan 21", order_value: 700, totalSale: 100 },
	{ label: "Jan 22", order_value: 810, totalSale: 510 },
	{ label: "Jan 23", order_value: 950, totalSale: 750 },
	{ label: "Jan 24", order_value: 970, totalSale: 670 },
	{ label: "Jan 25", order_value: 900, totalSale: 900 },
	{ label: "Jan 26", order_value: 950, totalSale: 750 },
	{ label: "Jan 27", order_value: 850, totalSale: 850 },
	{ label: "Jan 28", order_value: 900, totalSale: 700 },
	{ label: "Jan 29", order_value: 800, totalSale: 700 },
	{ label: "Jan 30", order_value: 950, totalSale: 250 },
	{ label: "Jan 31", order_value: 1100, totalSale: 500 },
	{ label: "Feb 01", order_value: 1200, totalSale: 100 },
	{ label: "Feb 02", order_value: 1250, totalSale: 250 },
	{ label: "Feb 03", order_value: 1400, totalSale: 400 },
	{ label: "Feb 04", order_value: 1500, totalSale: 120 },
	{ label: "Feb 05", order_value: 1400, totalSale: 400 },
	{ label: "Feb 06", order_value: 1450, totalSale: 50 },
];

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
			<ResponsiveContainer height={300} width="100%">
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
