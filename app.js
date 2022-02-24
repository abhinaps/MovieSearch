
catalogEl = document.querySelector(".movies-catalog")
searchEl = document.querySelector(".search")
searchBtnEl = document.querySelector(".search-btn")

searchBtnEl.addEventListener("click", (e) => {
    const movieSearched = searchEl.value
    console.log(movieSearched);
})


