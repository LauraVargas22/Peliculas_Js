import { peliculas } from "../data/peliculas.js";

export const btnSeeMore = document.querySelector('#btnSeeMore');

export const movieCards = (peliculas) => {
    const moviesImages = document.getElementById('moviesImages');
    moviesImages.classList.add('row', 'row-cols-1', 'row-cols-md-2', 'row-cols-lg-3');
    for (const {title, description, image} of peliculas) {
        const divItems = document.createElement('div');
        divItems.classList.add('col');
        divItems.innerHTML = `
        <div class="card">
            <h1 class="movie__title">${title}</h1>
            <img class="img-fluid" src="${image}" alt="Movie Image">
            <p class="movie__description">${description}</p>
            <div clzass="text-center">
                <button id="btnSeeMore" class="btn btn-danger">See More</button>
            </div>
        </div>
        `;
        moviesImages.appendChild(divItems);
    };
}