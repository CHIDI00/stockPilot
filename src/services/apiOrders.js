import supabase from "./supabase";

export async function getOrders({ page }) {
	const { data, error, count } = await supabase
		.from("orders")
		.select("*", { count: "exact" });

	console.log(count);

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
