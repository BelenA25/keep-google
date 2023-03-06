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
}