import { peliculas } from "./data/peliculas.js";
import * as archivo from "./js/barra.js"
import { movieCards } from "./js/movieCards.js";


const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            movieCards(peliculas);
            resolve('Movies loaded successfully');
        } catch (error) {
            reject('Error movies not found');
        }
    }, 2000);
  });
  
promesa.then((message) => {
    console.log(message);
})
.catch(err => console.warn(err));