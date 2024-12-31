import React from "react";
import { useSearchParams } from "react-router-dom";
import { getInventory } from "../services/apiInventory";
import { useQuery } from "@tanstack/react-query";

const useInventory = () => {
	const [searchParams] = useSearchParams();
	const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

	const {
		isLoading,
		data: { data: inventories, count } = {},
		error,
	} = useQuery({
		queryKey: ["inventories", page],
		queryFn: () => getInventory(page),
	});

	return { inventories, isLoading, count };
};

export default useInventory;
