import { Nota } from './nota.js';
export class ListaNotas{
    constructor(){
        this.notas = []
    }
    aniadirNota(nota){
        this.notas.push(nota)
    }
    getListaNotas(){
        return this.notas;
    }
    getTamanio(){
        return this.notas.length;
    }
    mostrarNotas(){
        const tituloDiv = document.getElementById("message-div");
        const descripcionDiv = document.getElementById("message2-div");
      
        tituloDiv.innerHTML = '';
        descripcionDiv.innerHTML = '';
      
        for (let i = 0; i < this.getTamanio(); i++) {
          const newContentTitulo = document.createTextNode("titulo: " + this.notas[i].getTitulo());
          const newContentDescripcion = document.createTextNode("descripcion: " + this.notas[i].getDescripcion());
      
          const notaDiv = document.createElement("div");
          const tituloSpan = document.createElement("span");
          const descripcionSpan = document.createElement("span");
      
          tituloSpan.appendChild(newContentTitulo);
          descripcionSpan.appendChild(newContentDescripcion);
      
          notaDiv.appendChild(tituloSpan);
          notaDiv.appendChild(descripcionSpan);
      
          tituloDiv.appendChild(tituloSpan.cloneNode(true));
          descripcionDiv.appendChild(descripcionSpan.cloneNode(true));
        }
      }
    buscarPorTitulo(titulo) {
        
      for (let i = 0; i < this.notas.length; i++) {
        if (titulo == this.notas[i].getTitulo()) {
           return this.notas[i];
        }
      }
      return null;
    }
    eliminarNota(nota) {
      const index = this.notas.indexOf(nota);
      if (index !== -1) {
        this.notas.splice(index, 1);
      }
    }
      
}