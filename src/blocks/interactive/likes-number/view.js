// Disclaimer: Importing the `store` using a global is just a temporary solution.
const { store } = window.__experimentalInteractivity;

store({
	state: {
		wpmovies: {
			likedMovies: [],
		},
	},
	selectors: {
		wpmovies: {
			likesCount: ({ state }) => state.wpmovies.likedMovies.length,
			isLikedMoviesNotEmpty: ({ state }) =>
				state.wpmovies.likedMovies.length !== 0,
		},
	},
});
