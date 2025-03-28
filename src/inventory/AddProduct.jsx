import React, { useState, useEffect } from "react";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import Row from "../ui/Row";
import styled from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";
import useInventory from "./useInventory";
import AddProductForm from "./AddProductForm";
import { device } from "../utils/devices";

const SearchAndAddProduct = styled.span`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1.6rem;

	@media screen and (${device.mobileL}) {
		width: 100%;
		/* Removing the red border that might be causing visual issues */
	}
`;

const SearchBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	gap: 1rem;
	margin: 0 2rem;
	padding: 0.7rem 1rem;
	border: 1px solid #7a7979;
	border-radius: 8px;

	input {
		border: none;
		background-color: transparent;
		outline: none; /* Add outline: none to improve input field appearance */
		width: 100%; /* Ensure input takes full width */
	}

	@media screen and (${device.mobileL}) {
		margin: 0;
		width: 100%; /* Ensure search bar takes full width on mobile */
	}
`;

const AddProduct = ({ onSearch }) => {
	const { inventories, isLoading } = useInventory();
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [query, setQuery] = useState("");
	const [filteredProducts, setFilteredProducts] = useState([]);

	// Initialize filteredProducts with all inventories when data is loaded
	useEffect(() => {
		if (inventories) {
			setFilteredProducts(inventories);
		}
	}, [inventories]);

	const handleSearch = (event) => {
		const searchValue = event.target.value.toLowerCase();
		setQuery(searchValue);

		if (searchValue.trim() === "") {
			setFilteredProducts(inventories);
			// Pass empty search and all inventories when search is cleared
			if (onSearch) onSearch("", inventories);
		} else {
			// Make sure inventories exists before filtering
			const filtered = inventories
				? inventories.filter((product) =>
						product.products?.toLowerCase().includes(searchValue)
				  )
				: [];
			setFilteredProducts(filtered);

			// Pass the search results to parent component if onSearch prop exists
			if (onSearch) {
				onSearch(searchValue, filtered);
			}
		}
	};

	return (
		<div>
			<SearchAndAddProduct>
				<SearchBar>
					<HiMagnifyingGlass />
					<input
						type="text"
						value={query}
						onChange={handleSearch}
						placeholder="Search by product name"
					/>
				</SearchBar>

				<Button onClick={() => setIsOpenModal((show) => !show)}>
					{window.innerWidth <= 375 ? "Add" : "Add Product"}
				</Button>
			</SearchAndAddProduct>

			<div className="animate__fadeIn">
				{isOpenModal && (
					<Modal onClose={() => setIsOpenModal(false)}>
						<AddProductForm onCloseModal={() => setIsOpenModal(false)} />
					</Modal>
				)}
			</div>
		</div>
	);
};

export default AddProduct;
