import { peliculas } from "../data/peliculas.js";

//En este modulo se desarrollará la barra de búsqueda
//Posibles resultados de búsqueda donde se crea funció que toma como parámetros las peliculas ya registradas en data
export const SearchList = (peliculas, searchTerm = '') => {
    //Lista donde se van a agregar los nombres de las películas
    let movieName = [];
    //Se recorre la data tomando el título
    for (const {title} of peliculas) {
        //Si el título se encuentra se agrega a la lista
        if (title.toLowerCase().includes(searchTerm.toLowerCase())) {
            movieName.push(title);
        }
    }
    //Se retorna la lista con los nombres de las películas
    return movieName;
}

export const resultBox = document.querySelector(".results"); //Resultados de búsqueda
export const inputBox = document.querySelector(".search-bar"); // Campo de entrada de texto
export const movieInfo = document.getElementById("movieInfo");


//Representa resultados de búsqueda
export const displayResults = (result) => {
    //Los títulos de las películas ya obtenidos anteriormente se ordenan en una lista 
    resultBox.innerHTML = result
        .map(title => `<li class="result-item">${title}</li>`)
        .join("");

    // Agregar evento al hacer click en el nombre de la película
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
    //Se llaman los títulos de las películas
    const result = SearchList(peliculas, input);
    displayResults(result);
});

//Función para obtener información de una película
export const moviesInfo = (peliculas, title) => {
    return peliculas.find((pelicula) => pelicula.title.toLowerCase() === title.toLowerCase());
}

//Selección de película al hacer clic en la lista
export function selectInput(selectedTitle) {
    inputBox.value = selectedTitle;
    resultBox.innerHTML = "";
    // Busca la película correspondiente al título seleccionado
    const movie = moviesInfo(peliculas, selectedTitle);

    //Si la película es encontrada muestra un alerta con la información correspondiente
    if (movie) {
        //Alerta realizada con libreria sweetalert2
        Swal.fire({
            title: `${movie.title}`,
            text: `${movie.description}`,
            icon: "info"
        });
    }
}