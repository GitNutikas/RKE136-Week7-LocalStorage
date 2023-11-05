const container = document.querySelector('.container');

const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieYear = document.querySelector('.userInputYear');

const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const movieYearToDisplay = document.querySelector('.favoriteMovieYear');

let titleInStorage = localStorage.getItem('Title');
let imageUrlInStorage = localStorage.getItem('ImageUrl');
let yearInStorage = localStorage.getItem('Year');

if(titleInStorage && imageUrlInStorage && yearInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(116, 116, 233, 0.5), rgb(92, 85, 85, 0.5)), url('${imageUrlInStorage}')`;
    movieYearToDisplay.textContent = yearInStorage;
};

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let movieYearInput = movieYear.value;

    localStorage.setItem('Title', movieTitleInput);
    localStorage.setItem('ImageUrl', posterUrlInput);
    localStorage.setItem('Year', movieYearInput);

    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(116, 116, 233, 0.5), rgb(92, 85, 85, 0.5)), url('${posterUrlInput}')`;
    movieYearToDisplay.textContent = movieYearInput;

    movieTitle.value  = '';
    moviePosterUrl.value = '';
    movieYear.value = '';
});