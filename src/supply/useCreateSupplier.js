import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditSupplier } from "../services/apiSupplier";
import toast from "react-hot-toast";

export function useCreateSupllier() {
	const queryClient = useQueryClient();

	const { mutate: createSupplier, isLoading: isCreating } = useMutation({
		mutationFn: createEditSupplier,
		onSuccess: () => {
			toast.success("New Supplier has been added"),
				queryClient.invalidateQueries({ queryKey: ["suppliers"] });
			// reset();
		},
		onError: (err) => toast.error(err.message),
	});

	return { createSupplier, isCreating };
}
