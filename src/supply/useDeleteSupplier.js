import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteSupplier as deleteSupplierApi } from "../services/apiSupplier";

export function useDeleteSupplier() {
	const queryClient = useQueryClient();

	const { isLoading: isDeleting, mutate: deleteSupplier } = useMutation({
		mutationFn: deleteSupplierApi,
		onSuccess: () => {
			toast.success("Supplier has been deleted"),
				queryClient.invalidateQueries({
					queryKey: ["supplier"],
				});
		},
		onError: (err) => toast.error(err.message),
	});

	return { isDeleting, deleteSupplier };
}
