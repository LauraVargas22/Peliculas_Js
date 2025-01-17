import { peliculas } from "../data/peliculas.js";
import { showPopup } from "./seeMore.js";

export const movieCards = (peliculas) => {
    const moviesImages = document.getElementById('moviesImages');
    moviesImages.classList.add('row', 'row-cols-1', 'row-cols-md-2', 'row-cols-lg-3');
    for (const pelicula of peliculas) {
        const { title, description, image } = pelicula;
        const divItems = document.createElement('div');
        divItems.classList.add('col');
        divItems.innerHTML = /*html*/`
        <div class="card">
            <h1 class="movie__title">${title}</h1>
            <img class="img-fluid" src="${image}" alt="Movie Image">
            <p class="movie__description">${description}</p>
            <div class="text-center">
                <button class="btn btn-danger btnSeeMore">See More</button>
            </div>
        </div>
        `;

        const btnSeeMore = divItems.querySelector('.btnSeeMore');
        btnSeeMore.addEventListener('click', () => showPopup(pelicula));

        moviesImages.appendChild(divItems);
    };
}