const API_KEY = 'a07e22bc18f5cb106bfe4cc1f83ad8ed'
const URL_PREFIX = 'https://api.themoviedb.org/3/movie'
const NOW_PLAYING_URL = `${URL_PREFIX}/now_playing?api_key=${API_KEY}`
const TOP_RATED_URL = `${URL_PREFIX}/top_rated?api_key=${API_KEY}`

const imageURIPrefixHigh = 'https://image.tmdb.org/t/p/original'
const imageURIPrefixLow = 'https://image.tmdb.org/t/p/w45'

export const getPosterUrl = posterPath => `${imageURIPrefix}/${posterPath}`
export const getPosterUrlHigh = posterPath => `${imageURIPrefixHigh}/${posterPath}`
export const getPosterUrlLow = posterPath => `${imageURIPrefixLow}/${posterPath}`

export const fetchNowPlayingMovies = () => (
  fetch(NOW_PLAYING_URL)
    .then((response) => response.json())
    .then((response) => response.results)
    .catch(error => console.error(error))
)

export const fetchTopRatedMovies = () => (
  fetch(TOP_RATED_URL)
    .then((response) => response.json())
    .then((response) => response.results)
    .catch(error => console.error(error))
)
