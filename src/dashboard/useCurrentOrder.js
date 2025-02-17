import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { getOrdersAfterDate } from "../services/apiOrders";

export const userCurrentOrder = () => {
	const [searchParams] = useSearchParams();

	const numDays = !searchParams.get("last")
		? 7
		: Number(searchParams.get("last"));
	const queryDate = subDays(new Date(), numDays).toISOString();

	const { data: orders, isLoading } = useQuery({
		queryFn: () => getOrdersAfterDate(queryDate),
		queryKey: ["orders", `last-${numDays}`],
	});
{}
	return { isLoading, orders };
};
