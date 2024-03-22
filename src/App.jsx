import "../scss/global/_boilerplate.scss";
import "../scss/global/_colors.scss";
import "../scss/global/_fonts.scss";
import "../scss/global/_layout.scss";
import "../scss/global/_typography.scss";
import "../scss/components/_body.scss";
import "../scss/components/_header.scss";
import "../scss/components/_search.scss";

//importing light and dark css file
import "./Theme.css";

import Header from "./Header";
import Search from "./Search";

function App() {
	return (
		<>
			<Header />
			<Search />
		</>
	);
}

export default App;
