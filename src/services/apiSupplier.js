import { PAGE_SIZE } from "../utils/constants";
import supabase, { supabaseUrl } from "./supabase";

export async function getSupplier({ page }) {
	let query = supabase.from("suppliers").select("*", { count: "exact" });

	if (page) {
		const from = (page - 1) * (PAGE_SIZE - 1);
		const to = from + (PAGE_SIZE - 1);

		query = query.range(from, to);
	}

	const { data, error, count } = await query;

	if (error) {
		console.error(error);
		throw new Error("Supplier could not be Loaded");
	}

	return { data, count };
}

export async function createEditSupplier(newSupplier, id) {
	const hasImagePath = newSupplier.image.startsWith?.(supabase);

	const imageName = `${Math.random()}-${newSupplier.image.name}`.replaceAll(
		"/",
		""
	);

	const imagePath = hasImagePath
		? newSupplier.image
		: `${supabaseUrl}/storage/v1/object/public/supplier-images/${imageName}`;

	// 1. Create/edit Supplier
	let query = supabase.from("suppliers");

	// A) CREATE
	if (!id) query = query.insert([{ ...newSupplier, image: imagePath }]);

	// B) EDIT
	if (id)
		query = query
			.update({ ...newSupplier, image: imagePath })
			.eq("id", id)
			.select();

	const { data, error } = await query.select().single();

	if (error) {
		console.error(error);
		throw new Error("Supplier could not be created");
	}

	const { error: storageError } = await supabase.storage
		.from("supplier-images")
		.upload(imageName, newSupplier.image);

	if (storageError) {
		await supabase.from("suppliers").delete().eq("id", data.id);
		console.error(storageError);
		throw new Error("Supplier image could not be uploaded");
	}

	return data;
}

export async function deleteSupplier(id) {
	const { data, error } = await supabase
		.from("suppliers")
		.delete()
		.eq("id", id);

	if (error) {
		console.error(error);
		throw new Error("Supplier could not be Deleted");
	}

	return data;
}
