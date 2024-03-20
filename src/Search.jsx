import companyImage from "./assets/images/icon-company.svg";
import locationImage from "./assets/images/icon-location.svg";
import searchImage from "./assets/images/icon-search.svg";
import twitterImage from "./assets/images/icon-twitter.svg";
import websiteImage from "./assets/images/icon-website.svg";
import profileImage from "./assets/images/github-octocat.jpg";

import { useState } from "react";

function Search() {
	const gitHubAPI = `https://api.github.com/users/`;
	const [text, setText] = useState("");
	const [data, setData] = useState(null);

	// creating a async function to fetch api
	const handleClickFetchAPI = async () => {
		const response = await fetch(`${gitHubAPI}${text}`);
		try {
			if (response.ok) {
				const jsonResponse = await response.json();
				setData(jsonResponse);
			}
		} catch (error) {
			console.log("Error fetching data: ", error);
		}
	};

	// handling data after handleClickFetchAPI function
	const fetchData = (data) => {
		if (data) {
			return (
				<>
					<section className="main_information">
						<div
							key={data.id}
							className="information_container">
							<img
								className="avatar"
								src={data.avatar_url}
								alt="profile picture"
								height={117}
								width={117}
							/>
							<div className="profile_container">
								<div className="profile_info_container">
									<div className="info_item">
										<h1 className="profile_name">{data.name}</h1>
										<p className="profile_login">
											<a
												href={`${data.html_url}`}
												target="_blank">
												@{data.login}
											</a>
										</p>
									</div>
									<div className="info_item">
										<p className="profile_date">Joined {data.created_at}</p>
									</div>
								</div>
								<div className="bio_container">
									<p className="bio_information">{data.bio}</p>
									<div className="github_information">
										<div className="github_items">
											<span className="github">Repos</span>
											<h2 className="github_number">{data.public_repos}</h2>
										</div>
										<div className="github_items">
											<span className="github">Followers</span>
											<h2 className="github_number">{data.followers}</h2>
										</div>
										<div className="github_items">
											<span className="github">Following</span>
											<h2 className="github_number">{data.following}</h2>
										</div>
									</div>
									<div className="github_social">
										<div className="social_items">
											<img
												src={locationImage}
												alt="location icon"
											/>
											<p>
												{data.location != null
													? data.location
													: "Not Available"}
											</p>
										</div>
										<div className="social_items">
											<img
												src={twitterImage}
												alt="twitter icon"
											/>
											<p>
												{data.twitter_username != null
													? data.twitter_username
													: "Not Available"}
											</p>
										</div>
										<div className="social_items">
											<img
												src={websiteImage}
												alt="blog icon"
											/>
											<p>
												<a
													href={`http://${data.blog}`}
													target="_blank">
													{data.blog != "" ? data.blog : "Not Available "}
												</a>
											</p>
										</div>
										<div className="social_items">
											<img
												src={companyImage}
												alt="company icon"
											/>
											<p>
												{data.company != null ? data.company : "Not Available"}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</>
			);
		} else {
			return null;
		}
	};

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
							placeholder="Search GitHub username..."
							value={text}
							onChange={(event) => setText(event.target.value)}
						/>
						<button
							className="main_button"
							onClick={handleClickFetchAPI}>
							Search
						</button>
					</section>
					{/*  
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
									<div className="info_item">
										<h1 className="profile_name">The Octocat</h1>
										<p className="profile_login">@octocat</p>
									</div>
									<div className="info_item">
										<p className="profile_date">Joined 25 Jan 2011</p>
									</div>
								</div>
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
         */}

					{fetchData(data)}
				</div>
			</main>
		</>
	);
}

export default Search;
