import { Nota } from './nota.js';
import { ListaNotas } from './notas.js';

const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const form = document.querySelector("#message-form");
const form2 = document.querySelector("#buscador-form");
//const form3 = document.querySelector("#eliminar-form");
const notas = new ListaNotas();
const busqueda = document.querySelector("#buscador");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  
  const nota = new Nota(titulo.value, descripcion.value);
  notas.aniadirNota(nota);
  notas.mostrarNotas();


});

form2.addEventListener("submit", (event) => {
  event.preventDefault();


  const notaEncontrada = notas.buscarPorTitulo(busqueda.value);

  if (notaEncontrada) {
    const tituloDiv = document.getElementById("message-div");
    const descripcionDiv = document.getElementById("message2-div");
    
    tituloDiv.innerHTML = 'Título encontrado:' + notaEncontrada.getTitulo();
    descripcionDiv.innerHTML = 'Descripción Encontrada: ' + notaEncontrada.getDescripcion();
  } else {
  
    alert("La nota no se encontró en la lista.");
  }

});
