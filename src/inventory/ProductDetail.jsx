import React from "react";
import Row from "../ui/Row";
import Button from "../ui/Button";
import { HiChevronLeft } from "react-icons/hi";
import styled from "styled-components";
import { useMoveBack } from "../hooks/useMoveBack";
import useProduct from "./useProduct";
import Spinner from "../ui/Spinner";
import { formatCurrency } from "../utils/helpers";
import { device } from "../utils/devices";

const DetailStyle = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
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
const DetailRight = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 7rem;
	margin-bottom: 1rem;
`;

const Title = styled.p`
	font-weight: 700;
`;

const NavStyle = styled.div`
	margin-bottom: 2rem;
`;

const Detail2 = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 5rem;

	@media screen and (${device.mobileL}) {
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;
	}
`;

const ImageContainer = styled.div`
	width: 16rem;
	height: 16rem;
	border: 1px dotted #000;
`;

const Detail2Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10rem;

	@media screen and (${device.mobileL}) {
		width: 100%;
	}
`;

const JustThere = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;

	@media screen and (${device.mobileL}) {
		flex-direction: column;
		justify-content: flex-start;
	}
`;

const ProductDetail = () => {
	const moveBack = useMoveBack();

	const { inventories, isLoading } = useProduct();

	if (isLoading) return <Spinner />;

	const {
		id: productId,
		productID,
		products,
		quantity,
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
				<Title>
					<p>Details</p>
				</Title>
				<JustThere>
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
								<p>Quantity </p>
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
								<p>{quantity} </p>
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

					<Detail2>
						<ImageContainer></ImageContainer>

						<Detail2Content>
							<Row>
								<DetailRight>
									<p>Opening Stock </p>
								</DetailRight>
								<DetailRight>
									<p>Remaining Stock </p>
								</DetailRight>
								<DetailRight>
									<p>On the Way </p>
								</DetailRight>
								<DetailRight>
									<p>Threshold Value </p>
								</DetailRight>
							</Row>

							<Row>
								<DetailRight>
									<p>{quantity}</p>
								</DetailRight>
								<DetailRight>
									<p>30 </p>
								</DetailRight>
								<DetailRight>
									<p>5</p>
								</DetailRight>
								<DetailRight>
									<p>{thresholdValue}</p>
								</DetailRight>
							</Row>
						</Detail2Content>
					</Detail2>
				</JustThere>
			</DetailStyle>
		</>
	);
};

export default ProductDetail;
