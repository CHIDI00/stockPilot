import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import styled from "styled-components";
import Heading from "../ui/Heading";
import { useDarkMode } from "../context/DarkModeContext";
import useOrder from "../orders/useOrder";

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
`;

// Colors for the pie chart segments
const colorPalette = {
	light: [
		"#ef4444", // Red
		"#f97316", // Orange
		"#eab308", // Yellow
		"#22c55e", // Green
		"#3b82f6", // Blue
	],
	dark: [
		"#b91c1c", // Dark Red
		"#c2410c", // Dark Orange
		"#a16207", // Dark Yellow
		"#15803d", // Dark Green
		"#1d4ed8", // Dark Blue
	],
};

// Function to process orders and find the top 5 most ordered products
function getTopProducts(isDarkMode) {
	const { orders } = useOrder();
	// If no orders data is available, return empty array
	if (!orders || orders.length === 0) {
		return [];
	}

	console.log(orders);

	// Count occurrences of each product in orders
	const productCounts = {};

	orders.forEach((order) => {
		// Assuming each order has a product_name field
		// In a real application, you might need to adjust this based on your data structure
		const productName = order.product;
		console.log(productName);

		if (productCounts[productName]) {
			productCounts[productName] += 1;
		} else {
			productCounts[productName] = 1;
		}
	});

	// Convert to array and sort by count in descending order
	const sortedProducts = Object.entries(productCounts)
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
				<Heading as="h2">Top 5 Ordered Products</Heading>
				<p style={{ textAlign: "center", marginTop: "2rem" }}>
					No product data available
				</p>
			</ChartBox>
		);
	}

	return (
		<ChartBox>
			<Heading as="h4">Top 5 Ordered Products</Heading>
			<ResponsiveContainer width="100%" height={240}>
				<PieChart>
					<Pie
						data={data}
						nameKey="product"
						dataKey="value"
						innerRadius={85}
						outerRadius={110}
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
						iconSize={15}
						iconType="circle"
					/>
				</PieChart>
			</ResponsiveContainer>
		</ChartBox>
	);
};

export default TopProductsChart;
