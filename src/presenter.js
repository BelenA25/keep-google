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
    const newDiv = document.createElement("div");
    const newDiv2 = document.createElement("div2");

    const newContentTitulo = document.createTextNode("titulo: " + notas.getListaNotas()[i].getTitulo());
    const newContentDescripcion = document.createTextNode("descripcion: " + notas.getListaNotas()[i].getDescripcion());
    
    newDiv.appendChild(newContentTitulo);
    newDiv2.appendChild(newContentDescripcion);

    const currentDiv = document.getElementById("message-div");
    const currentDiv2 = document.getElementById("message2-div");

    currentDiv.insertBefore(newDiv, currentDiv);
    currentDiv2.insertBefore(newDiv2, currentDiv2);
    // document.getElementById("#message-div").appendChild(div);
    // div.innerHTML = "titulo: " + notas.getListaNotas()[i].getTitulo();
    // div2.innerHTML = "descripcion: " + notas.getListaNotas()[i].getDescripcion();
    // document.body.innerHTML += ''
  }
  
});

