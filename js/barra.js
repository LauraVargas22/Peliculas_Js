import { peliculas } from "../data/peliculas.js";

//En este modulo se desarrollará la barra de búsqueda
//Posibles resultados de búsqueda
export const SearchList = (peliculas, searchTerm = '') => {
    let movieName = [];
    for (const {title} of peliculas) {
        if (title.toLowerCase().includes(searchTerm.toLowerCase())) {
            movieName.push(title);
        }
    }
    return movieName;
}

const resultBox = document.querySelector(".results"); //Resultados de búsqueda
const inputBox = document.querySelector(".search-bar"); // Campo de entrada de texto
/*const movieInfo = document.getElementById("movieInfo");

const moviesInfo = (peliculas, searchTerm = '') => {
    let peliculaInfo = [];
    for (const {title, description} of peliculas) {
        if (title.toLowerCase().includes(searchTerm.toLowerCase()) || description.toLowerCase().includes(searchTerm.toLowerCase())) {
            peliculaInfo.push({ title, description });
        }
    }
    return peliculaInfo;
}*/

//Representa resultados de búsqueda
const displayResults = function (result) { 
    const resultHTML = result.map(function (movieInfo) {return `<li onclick=selectInput(this)>${movieInfo}</li onclick=selectInput>`;});
    resultBox.innerHTML = '<ul>' + resultHTML.join ("") + '</ul>';
};
// Detecta la pulsación sobre la barra de búsqueda
inputBox.onkeyup = function (e) {
    let result = [];
    const input = inputBox.value.toLowerCase();

    if (input.length === 0) {
        resultBox.innerHTML = "";
        return;
    }

    if (input.length) {
        result = SearchList(peliculas, '').filter ((movieInfo) => {return movieInfo.toLowerCase().includes(input);});

        displayResults(result);
    }
};
//Cuando el usuario hace clic sobre la pelìcula desplegará la información de acuerdo a esta
//FIXME
function selectInput(item) {
    const selected = item.innerText;
    inputBox.value = selected;
    resultBox.innerHTML = "";

    const selectedMovie = peliculas.find(pelicula => pelicula.title === selected);

    if (selectedMovie) {
        alert(`Description: ${selectedMovie.description}`);
    }
}
