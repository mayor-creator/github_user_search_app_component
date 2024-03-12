import "../scss/global/_boilerplate.scss";
import "../scss/global/_colors.scss";
import "../scss/global/_fonts.scss";
import "../scss/global/_layout.scss";
import "../scss/global/_typography.scss";

function App() {
	return (
		<>
			<section>
				<div className="wrapper">
					<h1>Git user app </h1>
					<header>
						<h2>devfinder</h2>
						<p>Light Dark </p>
					</header>
					<section>
						<input
							type="text"
							name=""
							id=""
							placeholder="Search GitHub username..."
						/>
						<button>Search</button>
					</section>
					<section>
						<h3>@octatocat</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
							odio. Quisque volutpat mattis eros.
						</p>
						<span>Joined</span>
						<span>Repos</span>
						<h2>8</h2>
						<span>Followers</span>
						<span>Following</span>
					</section>
				</div>
			</section>
		</>
	);
}

export default App;
