let liste = document.querySelector("#listMovies");

const userClick = document.querySelector('#userSend');
userClick.addEventListener('click', (event) => {
    event.preventDefault();
    liste.innerHTML = '';
    const userInput = document.querySelector('#userInput').value;
    getMovie(userInput);
});

const getMovie = (movie) => {
    const URL = `http://www.omdbapi.com/?s=${movie}&apikey=ab3c648d`;
    fetch(URL)
        .then(response => response.json())
        .then((data) => {
            data.Search.forEach((movie) => {
                liste.insertAdjacentHTML("beforeend", `
            <li>
                <img src="${movie.Poster}" alt="">
                <h2 id="title">${movie.Title}</h2>
                <p>${movie.Year}</p>
            </li>
            `);
            });
        });
};
getMovie("harry potter");

//DATE//DATE//DATE//DATE//DATE

userClick2.addEventListener('click', (event) => {
    event.preventDefault();
    liste.innerHTML = '';
    const userInputYear = document.querySelector('#userInputYear').value;
    const userInput = document.querySelector('#userInput').value;
    getMovie(userInput, userInputYear);
});

const getMovieYear = (movie) => {
    const URL2 = `http://www.omdbapi.com/?t=${movie}&y=${movie.Year}&apikey=ab3c648d`;
    fetch(URL2)
        .then(response => response.json())
        .then((data) => {
            data.Search.forEach((movie) => {
                liste.insertAdjacentHTML("beforeend", `
            <li>
                <img src="${movie.Poster}" alt="">
                <h2 id="title">${movie.Title}</h2>
                <p>${movie.Year}</p>
            </li>
            `);
            });
        });
};
