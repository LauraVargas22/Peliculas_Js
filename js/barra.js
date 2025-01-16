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

export const resultBox = document.querySelector(".results"); //Resultados de búsqueda
export const inputBox = document.querySelector(".search-bar"); // Campo de entrada de texto
export const movieInfo = document.getElementById("movieInfo");


//Representa resultados de búsqueda
export const displayResults = (result) => { 
    resultBox.innerHTML = result
        .map(title => `<li class="result-item">${title}</li>`)
        .join("");

    // Agregar evento de clic a cada elemento de la lista
    document.querySelectorAll('.result-item').forEach(item => {
        item.addEventListener('click', () => selectInput(item.innerText));
    });
};
// Detecta la pulsación sobre la barra de búsqueda
inputBox.addEventListener('keyup', () => {
    const input = inputBox.value.trim().toLowerCase();
    
    if (!input) {
        resultBox.innerHTML = "";
        return;
    }
    
    const result = SearchList(peliculas, input);
    displayResults(result);
});

// Función para obtener información de una película
export const moviesInfo = (peliculas, title) => {
    return peliculas.find((pelicula) => pelicula.title.toLowerCase() === title.toLowerCase());
}

// Selección de película al hacer clic en la lista
export function selectInput(selectedTitle) {
    inputBox.value = selectedTitle;
    resultBox.innerHTML = "";

    const movie = moviesInfo(peliculas, selectedTitle);

    if (movie) {
        Swal.fire({
            title: `${movie.title}`,
            text: `${movie.description}`,
            icon: "info"
        });
    }
}