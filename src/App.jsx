// import theme component
import { ThemeProvider } from "./ThemeContext";

// import scss components
import "../scss/global/_boilerplate.scss";
import "../scss/global/_colors.scss";
import "../scss/global/_fonts.scss";
import "../scss/global/_layout.scss";
import "../scss/global/_typography.scss";
import "../scss/components/_body.scss";
import "../scss/components/_header.scss";
import "../scss/components/_search.scss";

// import function components
import Header from "./Header";
import Search from "./Search";

//import light and dark css file
import "./Theme.css";

function App() {
	return (
		<>
			<ThemeProvider>
				<Header />
				<Search />
			</ThemeProvider>
		</>
	);
}

export default App;
