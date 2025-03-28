import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import styled from "styled-components";
import Heading from "../ui/Heading";
import { useDarkMode } from "../context/DarkModeContext";
import useOrder from "../orders/useOrder";
import { device } from "../utils/devices";

const ChartBox = styled.div`
	/* Box */
	/* background-color: var(--color-grey-0); */
	border: 1px solid var(--color-grey-100);
	border-radius: var(--border-radius-md);

	padding: 1rem;
	grid-column: 3 / span 2;

	& > *:first-child {
		margin-bottom: 1.6rem;
	}

	& .recharts-pie-label-text {
		font-weight: 600;
	}

	/* Style for legend text */
	& .recharts-legend-item-text {
		font-size: 1rem;
	}

	& .recharts-responsive-container {
		@media screen and (${device.mobileL}) {
			height: 210px;
		}
		@media screen and (${device.mobileM}) {
			height: 200px;
		}
	}
`;

// Colors for the pie chart segments
const colorPalette = {
	light: [
		"#3b82f6", // Blue
		"#22c55e", // Green
		"#eab308", // Yellow
		"#f97316", // Orange
		"#ef4444", // Red
	],
	dark: [
		"#1d4ed8", // Dark Blue
		"#15803d", // Dark Green
		"#a16207", // Dark Yellow
		"#c2410c", // Dark Orange
		"#b91c1c", // Dark Red
	],
};

// Function to process orders and find the top 5 products by order value
function getTopProducts(isDarkMode) {
	const { orders } = useOrder();
	// If no orders data is available, return empty array
	if (!orders || orders.length === 0) {
		return [];
	}

	// Aggregate total order value for each product
	const productValues = {};

	orders.forEach((order) => {
		const productName = order.product;
		const orderValue = order.order_value || 0; // Use 0 if order_value is undefined

		if (productValues[productName]) {
			productValues[productName] += orderValue;
		} else {
			productValues[productName] = orderValue;
		}
	});

	// Convert to array and sort by total value in descending order
	const sortedProducts = Object.entries(productValues)
		.map(([product, value]) => ({ product, value }))
		.sort((a, b) => b.value - a.value)
		.slice(0, 5); // Take only top 5

	// Add colors to each product
	const colors = isDarkMode ? colorPalette.dark : colorPalette.light;

	return sortedProducts.map((item, index) => ({
		...item,
		color: colors[index % colors.length],
	}));
}

const TopProductsChart = ({ orders }) => {
	const { isDarkMode } = useDarkMode();

	// Process the orders data to get top 5 products
	const data = getTopProducts(orders, isDarkMode);

	// If no data is available, show a message
	if (data.length === 0) {
		return (
			<ChartBox>
				<Heading as="h2">Top 5 Products by Order Value</Heading>
				<p style={{ textAlign: "center", marginTop: "2rem" }}>
					No product data available
				</p>
			</ChartBox>
		);
	}

	// Use smaller radius values for mobile screens
	const isMobile = window.matchMedia(`screen and (${device.mobileM})`).matches;
	const innerRadius = isMobile ? 60 : 85;
	const outerRadius = isMobile ? 80 : 110;

	return (
		<ChartBox>
			<Heading as="h4">Top ordered Products</Heading>
			<ResponsiveContainer width="100%" height={240}>
				<PieChart>
					<Pie
						data={data}
						nameKey="product"
						dataKey="value"
						innerRadius={innerRadius}
						outerRadius={outerRadius}
						cx="43%"
						cy="50%"
						paddingAngle={3}
					>
						{data.map((entry) => (
							<Cell
								key={entry.product}
								fill={entry.color}
								stroke={entry.color}
							/>
						))}
					</Pie>
					<Legend
						verticalAlign="middle"
						align="right"
						width="30%"
						layout="vertical"
						iconSize={isMobile ? 10 : 15}
						iconType="circle"
					/>
				</PieChart>
			</ResponsiveContainer>
		</ChartBox>
	);
};

export default TopProductsChart;
