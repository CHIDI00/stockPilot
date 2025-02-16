import { useSearchParams } from "react-router-dom";

export const userCurrentOrder = () => {
	const [searchParams] = useSearchParams();

	const numDays = !searchParams.get("last")
		? 7
		: Number(searchParams.get("Last"));
	const queryDate = sub;
};
