import { Nota } from './nota.js';
import { ListaNotas } from './notas.js';

const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const div = document.querySelector("#message-div");
const div2 = document.querySelector("#message2-div");
const form = document.querySelector("#message-form");
const notas = new ListaNotas();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nota = new Nota(titulo.value, descripcion.value);
  notas.aniadirNota(nota);
  for (let i = 0; i < notas.getTamanio(); i++) 
  {
    div.innerHTML = "titulo: " + notas.getListaNotas()[i].getTitulo();
    div2.innerHTML = "descripcion: " + notas.getListaNotas()[i].getDescripcion();

  }
  
});

