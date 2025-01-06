import React from "react";
import ButtonIcon from "../ui/ButtonIcon";
import { HiArrowRightEndOnRectangle } from "react-icons/hi2";
import { logout } from "../services/apiAuth";
import useLogout from "./useLogout";
import SpinnerMini from "../ui/SpinnerMini";

const Logout = () => {
	const { logout, isLoading } = useLogout();

	return (
		<ButtonIcon disabled={isLoading} onClick={logout}>
			{!isLoading ? <HiArrowRightEndOnRectangle /> : <SpinnerMini />}
		</ButtonIcon>
	);
};

export default Logout;
