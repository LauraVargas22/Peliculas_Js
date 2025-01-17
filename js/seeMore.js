import { peliculas } from "../data/peliculas.js";

// Función para mostrar la ventana emergente con información de la película, toma como parámetros la pelicula
export function showPopup(pelicula) {
    //Toma elemento de HTML con ID popup
    const popup = document.getElementById("popup");
    // Muestra el popup estableciendo su estilo de visualización a "block"
    popup.style.display = "block";

    // Desestructura los detalles de la película
    const { title, description, image, casting, duration, genre, releaseDate } = pelicula;
    
    // Actualiza el contenido del popup con los detalles de la película, de acuerdo al ID establecido en el HTML
    document.getElementById('popUpImage').src = `./images/movies/${image}`;
    document.getElementById('popUpTitle').textContent = title;
    document.getElementById('popUpText').textContent = description;
    document.getElementById('popUpCasting').textContent = `Casting: ${casting}`;
    document.getElementById('popUpDuration').textContent = `Duration: ${duration}`;
    document.getElementById('popUpGenre').textContent = `Genre: ${genre}`;
    document.getElementById('popUpDate').textContent = `Release Date: ${releaseDate}`;

    // Selecciona el botón de cierre del popup y asocia un evento de clic para cerrar el popup
    const btnClose = document.getElementById('popUpClose');
    btnClose.addEventListener('click', closePopup);
}

// Función para cerrar la ventana emergente
export const closePopup = () => {
    const popup = document.getElementById('popup');
    popup.style.display = "none"; //Oculta el popup
}