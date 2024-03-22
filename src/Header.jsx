import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Header() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<>
			<header className={`${theme} header`}>
				<div className="wrapper">
					<div className="header_container">
						<h2 className="header_logo devfinder">devfinder</h2>
						<button
							onClick={toggleTheme}
							type="image"
							className="header_button button">
							{theme}
						</button>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
