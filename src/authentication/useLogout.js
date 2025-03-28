import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogout() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const { mutate: logout, isLoading } = useMutation({
		mutationFn: logoutApi,
		onSuccess: () => {
			navigate("/login", { replace: true });
			queryClient.removeQueries();
			toast.success("Logged out successfully");
		},
		onError: (err) => toast.error("Failed to log out"),
	});

	return { logout, isLoading };
}
