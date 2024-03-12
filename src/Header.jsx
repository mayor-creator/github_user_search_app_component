import darkImage from "./assets/images/icon-moon.svg";
// eslint-disable-next-line no-unused-vars
import lightImage from "./assets/images/icon-sun.svg";

function Header() {
	return (
		<>
			<header className="header">
				<div className="wrapper">
					<div className="header_container">
						<h2 className="header_logo">devfinder</h2>
						<button
							type="image"
							className="header_button">
							DARK
							<img
								className="header_image"
								src={darkImage}
								alt="dark moon"
								width="20"
								height="20"
							/>
						</button>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
