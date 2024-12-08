import { useState } from "react";

const [randomOrderId, setRandomOrderId] = useState(useGenerateOrderId());

// GENERATE ORDER ID
export const useGenerateOrderId = () => {
	const prefix = "SP";
	const randomNumber = Math.floor(1000 + Math.random() * 9000);
	return prefix + randomNumber;
};

const handleGenerateNewCode = () => {
	setRandomOrderId(useGenerateOrderId());
};
handleGenerateNewCode();
