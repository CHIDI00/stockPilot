import React from "react";
import Row from "../ui/Row";
import Button from "../ui/Button";
import { HiChevronLeft } from "react-icons/hi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useMoveBack } from "../hooks/useMoveBack";
import useProduct from "./useProduct";
import Spinner from "../ui/Spinner";
import { formatCurrency } from "../utils/helpers";

const DetailStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	padding-top: 2rem;
	border-top: 1px solid var(--color-grey-300);
	gap: 5rem;
`;

const Detail1 = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 7rem;
`;

const Detail = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 7rem;
	margin-bottom: 2rem;
`;

const Title = styled.p`
	font-weight: 700;
`;

const NavStyle = styled.div`
	margin-bottom: 2rem;
`;

const ProductDetail = () => {
	const moveBack = useMoveBack();

	const { inventories, isLoading } = useProduct();

	if (isLoading) return <Spinner />;

	const {
		id: productId,
		productID,
		products,
		buyingPrice,
		thresholdValue,
		stockDate,
		availability,
	} = inventories;
	console.log(productID);

	return (
		<>
			<NavStyle>
				<Row type="horizontal">
					<h3>Product No. {productId}</h3>
					<Button onClick={moveBack}>
						<HiChevronLeft /> Go Back
					</Button>
				</Row>
			</NavStyle>

			<DetailStyle>
				<Title>Details</Title>

				<Detail1>
					<Row>
						<Detail>
							<p>Product Name </p>
						</Detail>
						<Detail>
							<p>Product ID </p>
						</Detail>
						<Detail>
							<p>Buying Price </p>
						</Detail>
						<Detail>
							<p>Threshold Value </p>
						</Detail>
						<Detail>
							<p>Stock In Date </p>
						</Detail>
						<Detail>
							<p>Availability </p>
						</Detail>
					</Row>
					<Row>
						<Detail>
							<p>{products} </p>
						</Detail>
						<Detail>
							<p>{productID} </p>
						</Detail>

						<Detail>
							<p>{formatCurrency(buyingPrice)} </p>
						</Detail>
						<Detail>
							<p>{thresholdValue} </p>
						</Detail>
						<Detail>
							<p>{stockDate} </p>
						</Detail>
						<Detail>
							<p>{availability} </p>
						</Detail>
					</Row>
				</Detail1>
			</DetailStyle>
		</>
	);
};

export default ProductDetail;
