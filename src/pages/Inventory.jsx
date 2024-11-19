import React from "react";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import OverallInventory from "../inventory/OverallInventory";
import InventoryProduct from "../inventory/InventoryProduct";

const Inventory = () => {
	return (
		<Row type="vertical">
			<OverallInventory />
			<InventoryProduct />
		</Row>
	);
};

export default Inventory;
