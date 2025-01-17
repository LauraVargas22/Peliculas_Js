//Importación de archivos JS
import { peliculas } from "../data/peliculas.js";
import { showPopup } from "./seeMore.js";

//Función para la creación de cards, toma como parámetro la data
export const movieCards = (peliculas) => {
    //Toma elemento HTML con ID moviesImages
    const moviesImages = document.getElementById('moviesImages');
    //Al elemento HTML con ID moviesImages le agrega la siguiente clase la cual hace uso de Bootstrap
    moviesImages.classList.add('row', 'row-cols-1', 'row-cols-md-2', 'row-cols-lg-3');
    //Por cada pelicula en data crea una card
    for (const pelicula of peliculas) {
        //Desestructuración de datos en data
        const { title, description, image } = pelicula;
        //Crea un div en HTML
        const divItems = document.createElement('div');
        //El div creado tendrá como clase col
        divItems.classList.add('col');
        //Cambios dentro del archivo HTML, se completa la información con la data adquirida
        divItems.innerHTML = /*html*/`
        <div class="card">
            <h1 class="movie__title">${title}</h1>
            <img class="img-fluid" src="../images/movies/${image}" alt="Movie Image">
            <p class="movie__description">${description}</p>
            <div class="text-center">
                <button class="btn btn-danger btnSeeMore">See More</button>
            </div>
        </div>
        `;

        const btnSeeMore = divItems.querySelector('.btnSeeMore');  // Selecciona el botón 'Ver más' dentro de 'divItems'
        btnSeeMore.addEventListener('click', () => showPopup(pelicula));  // Asocia el click llamado a la función ShowPopup
        moviesImages.appendChild(divItems);  // Agrega el contenedor de la película (divItems) a 'moviesImages'
    };
}