import { Nota } from './mostrador.js';

const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const div = document.querySelector("#message-div");
const div2 = document.querySelector("#message2-div");
const form = document.querySelector("#message-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nota = new Nota(titulo.value, descripcion.value);

  div.innerHTML = "titulo: " + nota.getTitulo();
  div2.innerHTML = "descripcion: " + nota.getDescripcion();
});

