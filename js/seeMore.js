import { peliculas } from "../data/peliculas.js";

const open = document.getElementById('btnSeeMore');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

export const seeMore = (peliculas) => {
    
}