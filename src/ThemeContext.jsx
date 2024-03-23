import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
	const [theme, setTheme] = useState("LIGHT");

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "LIGHT" ? "DARK" : "LIGHT"));
	};

	//updating the class of the body element
	useEffect(() => {
		document.body.className = theme;
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
};

ThemeProvider.propTypes;
