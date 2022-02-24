const API_KEY = "api_key=b37d9dc3b133ba33e560e5d19e56519b"
const BASE_API = "https://api.themoviedb.org/3/"
const API_URL = BASE_API+"discover/movie?sort_by=popularity.desc&"+API_KEY

const catalogEl = document.querySelector(".movies-catalog")
const searchEl = document.querySelector(".search")
const searchBtnEl = document.querySelector(".search-btn")


const makeMovieHTML = (poster,title,rating,overview) => {
    catalogEl.innerHTML += 
    `
        <div class="movie-item">
            <img src="https://image.tmdb.org/t/p/w500${poster}" alt="poster" height="200px" >
            <div class="movie-text">
                <h1>${title}</h1>
                <h3>${rating}</h3>
                <p>${overview}</p>
            </div>
        </div>
    `
}


const makeMovieItem = (movie) => {
    let title = movie.title
    let rating = movie.vote_average
    let overview = movie.overview
    let poster = movie.backdrop_path
    makeMovieHTML(poster,title,rating,overview)
}

const getMovieCatalog = (url) => fetch(url)
    .then(response => response.json())
    .then(data => {
        const movies = data.results
        movies.forEach(movie => {
            makeMovieItem(movie)
        });
    })


window.addEventListener("load",getMovieCatalog(API_URL))

searchBtnEl.addEventListener("click", (e) => {
    const movieSearched = searchEl.value
    if(movieSearched){
    const SEARCH_URL = BASE_API + "search/movie?query=" + movieSearched + "&page=1&" + API_KEY
    catalogEl.innerHTML = ""
    searchEl.value = ""
    getMovieCatalog(SEARCH_URL)
    }
})

