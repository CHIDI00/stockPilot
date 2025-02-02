import { createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

function DarkModProvider({ children }) {
	const [isSarkMode, setIsDarkMode] = useLocalStorageState(false, "isDarkMode");

	function toggleDarkMode() {
		setIsDarkMode((isDark) => !isDark);
	}

	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
}

const useDarkMode = () => {
	const context = useContextt(DarkModeContext);

	if (context === undefined)
		throw new Error("DarkModeContext was used outside the DarkModeProvider");
	return context;
};

export { DarkModProvider, useDarkMode };
