import { peliculas } from "../data/peliculas.js";
import { moviesInfo } from "./barra.js";

export const seeMore = (peliculas) => {
    const moviesWindow = document.getElementById('popup');
    moviesWindow.classList.add('row', 'row-cols-1 row-cols-lg-2');

    for (const {title, description, image, casting, duration, genre, releaseDate} of peliculas) {
        const divInfo = document.createElement('div');
        divInfo.classList.add('col');

        divInfo.innerHTML = `
        <div class="col">
            <img class="img-fluid" src="${image}" alt="Image Movie">
        </div>
        <div class="col">
            <h1 class="movies__title">${title}</h1>
            <p class="movies__text">${description}</p>
            <div class="row row-cols-1 row-cols-lg-2">
                <div class="col">
                    <h3>${casting}</h3>
                </div>
                <div class="col">
                    <h3>${duration}, ${genre}, ${releaseDate}</h3>
                </div>
            </div>
        </div>
        <button id="btnClose" class="btn btn-danger" onclick="hidePopup()">Cerrar</button>
        `;
        moviesWindow.appendChild(divInfo);
    }
    moviesInfo.classList.add('showPopup');
};

export function showPopup(peliculas) {
    const overlay = document.getElementById('moviesWindow');
    const popup = document.getElementById('popup');
    moviesWindow.style.display = 'block';
    setTimeout(() => {
        popup.classList.add('active');
        seeMore(peliculas);
    }, 10);
}

export function hidePopup() {
    const moviesWindow = document.getElementById('moviesWindow');
    const popup = document.getElementById('popup');
    popup.classList.remove('active');
    setTimeout(() => {
        moviesWindow.style.display = 'none';
    }, 300);
}