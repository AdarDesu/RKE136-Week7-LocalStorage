const container = document.querySelector(".container");
const movieTitle = document.querySelector(".user-input-title");
const movieDate = document.querySelector(".user-input-date");
const moviePictureUrl = document.querySelector(".user-input-picture-url");
const movieTitleToDisplay = document.querySelector(".movie-title");
const movieDateToDisplay = document.querySelector(".movie-date");
const btn = document.querySelector(".btn");
const movie = document.querySelector(".movie")
const empty = document.querySelector(".empty")

let titleInStorage = localStorage.getItem("title");
let dateInStorage = localStorage.getItem("date");
let imageUrlInStorage = localStorage.getItem("imageUrl");

if(titleInStorage && imageUrlInStorage && dateInStorage){
    movieTitleToDisplay.textContent = titleInStorage;
    movieDateToDisplay.textContent = dateInStorage;
    container.style.backgroundImage = `linear-gradient(#00001e80, #00000080), url("${imageUrlInStorage}")`;
    movie.style.display = "block";
    empty.style.display = "none"
}
else{
    movie.style.display = "none";
    empty.style.display = "block"
}

btn.addEventListener("click", () => {
    let movieTitleInput = movieTitle.value;
    let movieDateInput = movieDate.value;
    let pictureUrlInput = moviePictureUrl.value;

    localStorage.setItem("title", movieTitleInput);
    localStorage.setItem("date", movieDateInput);
    localStorage.setItem("imageUrl", pictureUrlInput);

    movieTitleToDisplay.textContent = movieTitleInput;
    movieDateToDisplay.textContent = movieDateInput;

    movie.style.display = "block";
    empty.style.display = "none"

    container.style.backgroundImage = `linear-gradient(#00001e80, #00000080), url("${pictureUrlInput}")`;

    movieTitle.value = "";
    movieDate.value = "";
    moviePictureUrl.value = "";
});