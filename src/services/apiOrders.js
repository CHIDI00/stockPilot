import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

export async function getOrders({ filter, page }) {
	let query = supabase.from("orders").select("*", { count: "exact" });
	// .eq("status", "Pending");

	// FILTER
	if (filter) query = query.eq(filter.field, filter.value);

	if (page) {
		const from = (page - 1) * (PAGE_SIZE - 1);
		const to = from + (PAGE_SIZE - 1);

		query = query.range(from, to);
	}

	const { data, error, count } = await query;

	if (error) {
		console.error(error);
		throw new Error("Order could not be Loaded");
	}

	return { data, count };
}

export async function createOrder(newOrder) {
	const { data, error } = await supabase.from("orders").insert([newOrder]);

	if (error) {
		console.error(error);
		throw new Error("Order could not be created");
	}

	return data;
}
