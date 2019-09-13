const liste = document.querySelector("#listMovies");
const userClick = document.querySelector('#userSend');
const userInput = document.querySelector('#userInput');
const userInputYear = document.querySelector("#userInputYear");

//DATA MOVIE
const dataMovie = (data) => {
    if(data.Error){
        alert(data.Error);
    }
    liste.innerHTML = '';
    data.Search.forEach((movie) => {
        liste.insertAdjacentHTML("beforeend", `
            <li>
                <img src="${movie.Poster}" alt="">
                <h2 id="title">${movie.Title}</h2>
                <p>${movie.Year}</p>
            </li>
            `);
    });
}

//GET MOVIE
const getMovie = (movie, year) => {
    const URL = `http://www.omdbapi.com/?s=${movie}&y=${year}&apikey=ab3c648d`;
    fetch(URL)
        .then(response => response.json())
        .then(dataMovie)
        .catch((error)=>{
            console.log("erreur" + " " + error.message)
        })
};
getMovie("disney");

//CLICK RECHERCHE
userClick.addEventListener('click', (event) => {
    event.preventDefault();
    getMovie(userInput.value, userInputYear.value);
});

