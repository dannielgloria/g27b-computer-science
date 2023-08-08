//Crear una clase "Nota" que tenga propiedades como título, contenido, fecha de creación
class Nota{
    constructor(titulo, contenido, fechaCreacion){
        this.titulo = titulo;
        this.contenido = contenido;
        this.fechaCreacion = fechaCreacion;
    }

    mostrarNota(titulo) {
        titulo = this.titulo
        return this.contenido
    }
}

class NotaSimple extends Nota{
    constructor(titulo, contenido, fechaCreacion){
        super(titulo, contenido, fechaCreacion);
    }
}

class ListaTareas extends Nota{
    constructor(titulo, contenido, fechaCreacion, tareas){
        super(titulo, contenido, fechaCreacion);
        this.tareas = tareas;
    }
}

class Recordatorio extends Nota{
    constructor(titulo, contenido, fechaCreacion, fechaRecordatorio){
        super(titulo, contenido, fechaCreacion);
        this.fechaRecordatorio = fechaRecordatorio;
    }
}

function crearNota() {
    // Obtener los valores del formulario y crear una nueva nota
    // Agregar la nota a un array de notas
    // Actualizar la interfaz de usuario para mostrar la nueva nota
}

function modificarNota(notaId) {
    // Obtener la nota con el ID proporcionado
  // Actualizar la interfaz de usuario para mostrar los valores actuales de la nota
  // Permitir al usuario editar los valores y guardar los cambios
  // Actualizar la interfaz de usuario para reflejar los cambios
}

function eliminarNota(notaId) {
    // Obtener la nota con el ID proporcionado
    // Eliminar la nota del array de notas
    // Actualizar la interfaz de usuario para reflejar los cambios
}

function guardarNotas(notas){
    localStorage.setItem("notas", JSON.stringify(notas));
}

function cargarNotas() {
    const notasJSON = localStorage.getItem("notas");
    if (notasJSON) {
        let result = JSON.parse(notasJSON);
        let contenido = Nota.mostrarNota;
        result = result + contenido
        return result;
    } else {
        let result = [];
        return result;
    }
}