import { peliculas } from "./data/peliculas.js";
import * as archivo from "./js/barra.js"
import { movieCards } from "./js/movieCards.js";
import { hidePopup, showPopup } from "./js/seeMore.js";

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
  
promesaCards.then((message) => {
    console.log(message);
})
.catch(err => console.warn(err));

const promesaInfo  = new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            showPopup(peliculas);
            resolve('Movies information loaded successfully');
        } catch (error) {
            reject('Error movies information not found');
        }
    }, 2000);
  });
  
promesaInfo.then((message) => {
    console.log(message);
})
.catch(err => console.warn(err));

const promesaCloseInfo  = new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            hidePopup();
            resolve('Close movies information successfully');
        } catch (error) {
            reject('Error close movies information');
        }
    }, 2000);
  });
  
promesaCloseInfo.then((message) => {
    console.log(message);
})
.catch(err => console.warn(err));

