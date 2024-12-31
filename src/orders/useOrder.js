import { useSearchParams } from "react-router-dom";
import { getOrders } from "../services/apiOrders";
import { useQuery } from "@tanstack/react-query";

const useOrder = () => {
	const [searchParams] = useSearchParams();
	const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

	//FILTER
	const filterValue = searchParams.get("status");
	const filter =
		!filterValue || filterValue === "all"
			? null
			: { field: "status", value: filterValue };

	const {
		isLoading,
		data: { data: orders, count } = {},
		error,
	} = useQuery({
		queryKey: ["orders", filter, page],
		queryFn: () => getOrders({ filter, page }),
	});

	return { orders, isLoading, count };
};

export default useOrder;
