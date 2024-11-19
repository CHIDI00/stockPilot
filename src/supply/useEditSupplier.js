import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditSupplier } from "../services/apiSupplier";
import toast from "react-hot-toast";

export function useEditSupplier() {
	const queryClient = useQueryClient();

	const { mutate: editSupplier, isLoading: isEditing } = useMutation({
		mutationFn: ({ newSupplierData, id }) =>
			createEditSupplier(newSupplierData, id),
		onSuccess: () => {
			toast.success("Supplier successfully edited");
			queryClient.invalidateQueries({ queryKey: ["suppliers"] });
			// reset();
		},
		onError: (err) => toast.error(err.message),
	});

	return { editSupplier, isEditing };
}
