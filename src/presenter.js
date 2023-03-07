import { Nota } from './nota.js';
import { ListaNotas } from './notas.js';

const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const form = document.querySelector("#message-form");
const formBuscador = document.querySelector("#buscador-form");
const formEliminar = document.querySelector("#eliminar-form");
const notas = new ListaNotas();
const busqueda = document.querySelector("#buscador");
const eliminar = document.querySelector("#eliminador");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nota = new Nota(titulo.value, descripcion.value);
  notas.aniadirNota(nota);
  notas.mostrarNotas();

});

formBuscador.addEventListener("submit", (event) => {
  event.preventDefault();

  const notaEncontrada = notas.buscar(busqueda.value);

  if (notaEncontrada) {
    const tituloDiv = document.getElementById("resultadoTitulo");
    const descripcionDiv = document.getElementById("resultadoDescripcion");
    
    tituloDiv.innerHTML = 'Título encontrado:' + notaEncontrada.getTitulo();
    descripcionDiv.innerHTML = 'Descripción Encontrada: ' + notaEncontrada.getDescripcion();
  } 
  else {
  
    alert("La nota no se encontró en la lista.");
  }

});
formEliminar.addEventListener("submit", (event) => {
  event.preventDefault();

  const notaAEliminar = notas.buscar(eliminar.value);

  if(notaAEliminar){
    notas.eliminarNota(notaAEliminar);
  }
  else{
    alert("La nota no se encontró en la lista.");
  }
  


  notas.mostrarNotas();

  
});
