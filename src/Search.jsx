import companyImage from "./assets/images/icon-company.svg";
import locationImage from "./assets/images/icon-location.svg";
import searchImage from "./assets/images/icon-search.svg";
import twitterImage from "./assets/images/icon-twitter.svg";
import websiteImage from "./assets/images/icon-website.svg";
import profileImage from "./assets/images/github-octocat.jpg";

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

					<section className="main_information">
						<div className="information_container">
							<img
								className="avatar"
								src={profileImage}
								alt="profile picture"
								height={117}
								width={117}
							/>
							<div className="profile_container">
								<div className="profile_info_container">
									<h1 className="profile_name">The Octocat</h1>
									<p className="profile_date">Joined 25 Jan 2011</p>
								</div>
								<p className="profile_login">@octocat</p>
								<div className="bio_container">
									<p className="bio_information">
										Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
										Donec odio. Quisque volutpat mattis eros.
									</p>
									<div className="github_information">
										<div className="github_items">
											<span className="github">Repos</span>
											<h2 className="github_number">8</h2>
										</div>
										<div className="github_items">
											<span className="github">Followers</span>
											<h2 className="github_number">3938</h2>
										</div>
										<div className="github_items">
											<span className="github">Following</span>
											<h2 className="github_number">9</h2>
										</div>
									</div>
									<div className="github_social">
										<div className="social_items">
											<img
												src={locationImage}
												alt="location"
											/>
											<p>San Francisco</p>
										</div>
										<div className="social_items">
											<img
												src={twitterImage}
												alt="twitter"
											/>
											<p>Not Available</p>
										</div>
										<div className="social_items">
											<img
												src={websiteImage}
												alt="website"
											/>
											<p>
												<a
													href="http://"
													target="_blank">
													https://github.blog
												</a>
											</p>
										</div>
										<div className="social_items">
											<img
												src={companyImage}
												alt="company"
											/>
											<p>@github</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}

export default Search;
