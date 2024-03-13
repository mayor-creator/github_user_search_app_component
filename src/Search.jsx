import companyImage from "./assets/images/icon-company.svg";
import locationImage from "./assets/images/icon-location.svg";
import searchImage from "./assets/images/icon-search.svg";
import twitterImage from "./assets/images/icon-twitter.svg";
import websiteImage from "./assets/images/icon-website.svg";

function Search() {
	return (
		<>
			<main className="main">
				<div className="wrapper">
					<section className="main_search">
						<label
							htmlFor="username-search"
							hidden={true}></label>
						<img
							className="main_image"
							src={searchImage}
							alt="search"
							height={24}
							width={25}
						/>
						<input
							className="main_input"
							type="search"
							name="search"
							id="username-search"
							placeholder="Search GitHub username.."
						/>
						<button className="main_button">Search</button>
					</section>
				</div>
			</main>
		</>
	);
}

export default Search;
