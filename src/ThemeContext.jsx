import { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
	const [theme, setTheme] = useState("LIGHT");

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "LIGHT" ? "DARK" : "LIGHT"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
};

ThemeProvider.propTypes;
