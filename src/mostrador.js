export class Nota {
    constructor(titulo, descripcion) {
        this.titulo = titulo;
        this.descripcion = descripcion;
    }

    aniadirDescripcion(descripcion) {
        this.descripcion = descripcion;
    }
    getTitulo(){
        return this.titulo;
    }
    getDescripcion(){
        return this.descripcion;
    }
}