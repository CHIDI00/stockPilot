import { createContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

function DarkModProvider({ children }) {
	const [isSarkMode, setIsDarkMode] = useLocalStorageState();
}
