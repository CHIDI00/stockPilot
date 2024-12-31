import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

export async function getInventory({ page }) {
	let query = supabase.from("inventories").select("*", { count: "exact" });

	if (page) {
		const from = (page - 1) * (PAGE_SIZE - 1);
		const to = from + (PAGE_SIZE - 1);

		query = query.range(from, to);
	}

	const { data, error, count } = await query;

	if (error) {
		console.error(error);
		throw new Error("Inventory could not be Loaded");
	}

	return { data, count };
}

export async function createProduct(newProduct) {
	const { data, error } = await supabase
		.from("inventories")
		.insert([newProduct]);

	if (error) {
		console.error(error);
		throw new Error("Product could not be added");
	}

	return data;
}

export async function getProduct(id) {
	let query = supabase.from("inventories").select("*").eq("id", id).single();

	const { data, error } = await query;

	if (error) {
		console.error(error);
		throw new Error("Product Not Found");
	}

	return data;
}
