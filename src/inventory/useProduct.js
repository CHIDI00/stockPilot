import { useParams } from "react-router-dom";
import { getProduct } from "../services/apiInventory";
import { useQuery } from "@tanstack/react-query";

const useProduct = () => {
	const { productId } = useParams();

	const {
		isLoading,
		data: inventories,
		error,
	} = useQuery({
		queryKey: ["inventories"],
		queryFn: () => getProduct(productId),
		retry: false,
	});

	return { inventories, isLoading };
};

export default useProduct;
