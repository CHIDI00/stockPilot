import supabase, { supabaseUrl } from "./supabase";

export async function getOrders() {
	const { data, error } = await supabase.from("orders").select("*");

	if (error) {
		console.error(error);
		throw new Error("Order could not be Loaded");
	}

	return data;
}

export async function createOrders(newOrders, id) {
	const hasImagePath = newOrders.image.startsWith?.(supabase);

	const imageName = `${Math.random()}-${newOrders.image.name}`.replaceAll(
		"/",
		""
	);

	const imagePath = hasImagePath
		? newOrders.image
		: `${supabaseUrl}/storage/v1/object/public/orders-images/${imageName}`;

	// 1. Create/edit Orders
	let query = supabase.from("orders");

	// A) CREATE
	if (!id) query = query.insert([{ ...newOrders, image: imagePath }]);

	// B) EDIT
	if (id)
		query = query
			.update({ ...newOrders, image: imagePath })
			.eq("id", id)
			.select();

	const { data, error } = await query.select().single();

	if (error) {
		console.error(error);
		throw new Error("Orders could not be created");
	}

	// const { error: storageError } = await supabase.storage
	// 	.from("orders-images")
	// 	.upload(imageName, newOrders.image);

	if (storageError) {
		await supabase.from("orders").delete().eq("id", data.id);
		console.error(storageError);
		throw new Error("Orders image could not be uploaded");
	}

	return data;
}

export async function deleteOrders(id) {
	const { data, error } = await supabase.from("orders").delete().eq("id", id);

	if (error) {
		console.error(error);
		throw new Error("Orders could not be Deleted");
	}

	return data;
}
