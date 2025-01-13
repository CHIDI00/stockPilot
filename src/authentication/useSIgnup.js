import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../src/services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const { mutate: signup, isLoading } = useMutation({
		mutationFn: ({ email, password }) => signupApi({ email, password }),
		onSuccess: (user) => {
			// queryClient.setQueryData(["user"], user.user);
			// navigate("/dashboard", { replace: true });
			toast.success("Account has been successfully created.");
		},
	});

	return { signup, isLoading };
}
