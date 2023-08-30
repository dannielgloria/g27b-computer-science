

class Nodo {
    constructor(valor) {
      this.valor = valor; // Datos almacenados en el nodo.
      this.nodoSiguiente = null; // Referencia al siguiente nodo en la lista.
    }
  }
  
  class ListaEnlazada {
    constructor() {
      this.cabeza = null; // Puntero al primer nodo en la lista.
    }
  
    append(valor) {
      const nuevoNodo = new Nodo(valor);
      if (!this.cabeza) {
        this.cabeza = nuevoNodo; // Si la lista está vacía, el nuevo nodo se convierte en el primero.
      } else {
        let nodoActual = this.cabeza;
        while (nodoActual.nodoSiguiente) {
          nodoActual = nodoActual.nodoSiguiente;
        }
        nodoActual.nodoSiguiente = nuevoNodo; // Agrega el nuevo nodo al final de la lista.
      }
    }
  
    prepend(valor) {
      const nuevoNodo = new Nodo(valor);
      nuevoNodo.nodoSiguiente = this.cabeza; // Establece el nuevo nodo como el primero.
      this.cabeza = nuevoNodo;
    }
  
    delete(valor) {
      if (!this.cabeza) {
        return;
      }
      if (this.cabeza.valor === valor) {
        this.cabeza = this.cabeza.nodoSiguiente; // Elimina el primer nodo si contiene los datos buscados.
        return;
      }
      let nodoActual = this.cabeza;
      while (nodoActual.nodoSiguiente) {
        if (nodoActual.nodoSiguiente.valor === valor) {
          nodoActual.nodoSiguiente = nodoActual.nodoSiguiente.nodoSiguiente; // Elimina el nodo siguiente si contiene los datos buscados.
          return;
        }
        nodoActual = nodoActual.nodoSiguiente;
      }
    }
  
    display() {
      let nodoActual = this.cabeza;
      while (nodoActual) {
        console.log(nodoActual.valor); // Muestra los datos de cada nodo en la lista.
        nodoActual = nodoActual.nodoSiguiente;
      }
    }
  }

  const listaEnlazada = new ListaEnlazada();
  listaEnlazada.append(10);
  listaEnlazada.append(23);
  listaEnlazada.append(19);
  listaEnlazada.append(9);
  listaEnlazada.append(7);
  listaEnlazada.append(18);
  listaEnlazada.append(50);
  listaEnlazada.display();
  console.log('-----------------')
  listaEnlazada.delete(23);
  listaEnlazada.display();
  console.log('-----------------')
  listaEnlazada.delete(10);
  listaEnlazada.display();
  console.log('-----------------')
  listaEnlazada.prepend(7);
  listaEnlazada.append(235);
  listaEnlazada.display();