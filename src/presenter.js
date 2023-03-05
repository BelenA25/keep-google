import sumar from "./sumador";
import multiplicar from "./multiplicador";

const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const div = document.querySelector("#message-div");
const div2 = document.querySelector("#message2-div");
const form = document.querySelector("#message-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "titulo: " +  titulo.value;
  div2.innerHTML = "descripcion: " + descripcion.value;


});

