import { peliculas } from "./data/peliculas.js";
import * as archivo from "./js/barra.js"
import { movieCards } from "./js/movieCards.js";
import { closePopup, showPopup } from "./js/seeMore.js";

const promesaCards  = new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            movieCards(peliculas);
            resolve('Movies loaded successfully');
        } catch (error) {
            reject('Error movies not found');
        }
    }, 2000);
  });
  
promesaCards
    .then((message) => {
        console.log(message);
    })
    .catch((err) => {
        console.warn(err)
    });

const promesaInfo  = new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            showPopup(pelicula);
            resolve('Movies information loaded successfully');
        } catch (error) {
            reject('Error movies information not found');
        }
    }, 2000);
  });
  
promesaInfo
    .then((message) => {
        console.log(message);
    })
    .catch((err) => {
        console.warn(err)
    });

const promesaClose  = new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            closePopup();
            resolve('Movies information loaded successfully');
        } catch (error) {
            reject('Error movies information not found');
        }
    }, 2000);
  });

promesaClose
    .then((message) => {
        console.log(message);
    })
    .catch((err) => {
        console.warn(err)
    });