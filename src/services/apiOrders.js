import supabase, { supabaseUrl } from "./supabase";

export async function getOrders() {
	const { data, error } = await supabase.from("orders").select("*");

	if (error) {
		console.error(error);
		throw new Error("Order could not be Loaded");
	}

	return data;
}

export async function createOrder(newOrder) {
	const { data, error } = await supabase.from("orders").insert([newOrder]);

	if (error) {
		console.error(error);
		throw new Error("Order could not be created");
	}

	return data;
}
