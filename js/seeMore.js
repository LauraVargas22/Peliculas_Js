import { peliculas } from "../data/peliculas.js";

// Función para mostrar la ventana emergente con información de la película
export function showPopup(pelicula) {
    const popup = document.getElementById("popup");
    popup.style.display = "block";

    const { title, description, image, casting, duration, genre, releaseDate } = pelicula;
    
    document.getElementById('popUpImage').src = image;
    document.getElementById('popUpTitle').textContent = title;
    document.getElementById('popUpText').textContent = description;
    document.getElementById('popUpCasting').textContent = `Casting: ${casting}`;
    document.getElementById('popUpDuration').textContent = `Duration: ${duration}`;
    document.getElementById('popUpGenre').textContent = `Genre: ${genre}`;
    document.getElementById('popUpDate').textContent = `Release Date: ${releaseDate}`;

    const btnClose = document.getElementById('popUpClose');
    btnClose.addEventListener('click', closePopup);
}

// Función para cerrar la ventana emergente
export const closePopup = () => {
    const popup = document.getElementById('popup');
    popup.style.display = "none";
}