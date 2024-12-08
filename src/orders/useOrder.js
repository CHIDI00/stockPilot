import { useSearchParams } from "react-router-dom";
import { getOrders } from "../services/apiOrders";
import { useQuery } from "@tanstack/react-query";

const useOrder = () => {
	const [searchParams] = useSearchParams();
	const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

	const {
		isLoading,
		data: { data: orders, count } = {},
		error,
	} = useQuery({
		queryKey: ["orders", page],
		queryFn: () => getOrders({ page }),
	});

	return { orders, isLoading, count };
};

export default useOrder;
