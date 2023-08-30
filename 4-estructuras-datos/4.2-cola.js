class Queue{
  constructor(){
    this.items= []; // Arreglo en el cual guardamos nuestos elementos
  }

  enqueue(item){// encolar
    this.items.push(item); // Agrega un elemento al final de la cola
  }

  dequeue(){// desencolar
    if (this.isEmpty()) {
      return 'Esta cola esta limpia'
    }
    return this.items.shift();// Dequeue:  retirar/eliminar el primer elemento de la cola
  }
  
  front(){
    return this.items[0] // devuelve el primer elemento sin eliminarlo
  }

  isEmpty(){
    return this.items.length === 0; // Verifica si la cola está vacía.
  }

  size(){
    return this.items.length; // Devuelve la cantidad de elementos en la cola.
  }

}

const cola = new Queue()

console.log(cola.front())

cola.enqueue(7);
cola.enqueue(24);
cola.enqueue(11);
cola.enqueue(313);

console.log(cola)

console.log(cola.dequeue());// ? = 7
console.log(cola.front());// ? = 24
console.log(cola)
console.log(cola.size())