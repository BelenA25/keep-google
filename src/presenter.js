import { Nota } from './nota.js';
import { ListaNotas } from './notas.js';

const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const form = document.querySelector("#message-form");
const form2 = document.querySelector("#buscador-form");
const form3 = document.querySelector("#eliminar-form");
const notas = new ListaNotas();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  
  const nota = new Nota(titulo.value, descripcion.value);
  notas.aniadirNota(nota);
  notas.mostrarNotas();

  
});

