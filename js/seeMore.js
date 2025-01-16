import { peliculas } from "../data/peliculas.js";

export const open = document.getElementById('btnSeeMore');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

export const seeMore = (peliculas) => {
    const moviesWindow = document.getElementById('moviesWindow');
    moviesWindow.classList.add('row', 'row-cols-1 row-cols-lg-2');
    for (const {title, description, image, casting, duration, genre, releaseDate} of peliculas) {
        const divItems = document.createElement('div');
        divItems.classList.add('col');
        divItems.innerHTML = `
        <div class="col">
                <img class="img-fluid" src="${image}" alt="Image Movie">
            </div>
            <div class="col">
                <h1 class="movie__title">${title}</h1>
                <p class="movie__description">${description}</p>
                <div class="row row-cols-1 row-cols-lg-2">
                    <div class="col">
                        <h3>${casting}</h3>
                    </div>
                    <div class="col">
                        <h3>${duration, genre, releaseDate}</h3>
                    </div>
                </div>
            </div>
            <button id="close">Cerrar</button>
        `;
        moviesWindow.appendChild(divItems);
    };
}