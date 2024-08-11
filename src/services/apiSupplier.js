import supabase from "./supabase";

export async function getSupplier() {
	const { data, error } = await supabase.from("suppliers").select("*");

	if (error) {
		console.error(error);
		throw new Error("Supplier could not be Loaded");
	}

	return data;
}

