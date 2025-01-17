//Importación archivos js al principal
import { peliculas } from "./data/peliculas.js";
import * as archivo from "./js/barra.js"
import { movieCards } from "./js/movieCards.js";
import { closePopup, showPopup } from "./js/seeMore.js";

//Promesa para la ejecucuón de la carga de las cartas
const promesaCards  = new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            movieCards(peliculas);
            resolve('Movies loaded successfully'); //Mensaje al ejecutarse la función
        } catch (error) {
            reject('Error movies not found'); //Mensaje al no ejecutarse correctamente la función
        }
    }, 2000);
  });
  
promesaCards
    .then((message) => {
        console.log(message); //Mensaje al resolverse la promesa
    })
    .catch((err) => {
        console.warn(err) //Mensaje al rechazarse la promesa
    });

//Promesa para la ejecución de la ventana emergente
const promesaInfo  = new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            showPopup(pelicula);
            resolve('Movies information loaded successfully'); //Mensaje al ejecutarse la función
        } catch (error) {
            reject('Error movies information not found'); //Mensaje al no ejecutarse correctamente la función
        }
    }, 2000);
  });
  
promesaInfo
    .then((message) => {
        console.log(message); //Mensaje al resolverse la promesa
    })
    .catch((err) => {
        console.warn(err) //Mensaje al rechazarse la promesa
    });

//Promesa para la ejecución de la función para cerrar el popup
const promesaClose  = new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            closePopup();
            resolve('Movies information loaded successfully'); //Mensaje al ejecutarse la función
        } catch (error) {
            reject('Error movies information not found'); //Mensaje al no ejecutarse correctamente la función
        }
    }, 2000);
  });

promesaClose
    .then((message) => {
        console.log(message); //Mensaje al resolverse la promesa
    })
    .catch((err) => {
        console.warn(err) //Mensaje al rechazarse la promesa
    });