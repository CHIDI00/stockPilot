import React from "react";
import Row from "../ui/Row";

const ProductDetail = () => {
	return (
		<>
			<Row type="horizontal">
				<h3>Maggi</h3>
				<button>Back</button>
			</Row>

			<Row type="vertical">
				<div>
					<p>Product Name: </p>
					<p>Maggi</p>
				</div>
				<div>
					<p>Product Name: </p>
					<p>Maggi</p>
				</div>
				<div>
					<p>Product Name: </p>
					<p>Maggi</p>
				</div>
				<div>
					<p>Product Name: </p>
					<p>Maggi</p>
				</div>
				<div>
					<p>Product Name: </p>
					<p>Maggi</p>
				</div>
			</Row>
		</>
	);
};

export default ProductDetail;
