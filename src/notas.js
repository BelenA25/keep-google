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
      
        const newDiv = document.createElement("div");
        const newDiv2 = document.createElement("div");
      
        const currentDiv = document.getElementById("message-div");
        const currentDiv2 = document.getElementById("message2-div");


      
        for (let i = 0; i < this.getTamanio(); i++) 
        {
          const newContentTitulo = document.createTextNode("titulo: " + this.notas[i].getTitulo());
          const newContentDescripcion = document.createTextNode("descripcion: " + this.notas[i].getDescripcion());
          
          newDiv.appendChild(newContentTitulo);
          newDiv2.appendChild(newContentDescripcion);
      
          const tituloDiv = document.createElement("div");
          const descripcionDiv = document.createElement("div");
      
          tituloDiv.appendChild(newContentTitulo);
          descripcionDiv.appendChild(newContentDescripcion);
      
          newDiv.appendChild(tituloDiv);
          newDiv2.appendChild(descripcionDiv);



        }
        currentDiv.innerHTML = '';
        currentDiv2.innerHTML = '';
        
        currentDiv.appendChild(newDiv);
        currentDiv2.appendChild(newDiv2);
    }
}