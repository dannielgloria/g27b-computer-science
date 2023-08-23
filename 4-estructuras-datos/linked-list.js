// Definición del nodo
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Definición de la lista enlazada
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Método para agregar un elemento al final de la lista
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  //Metodo para eliminar un elemento de la lista
  delete(value) {
    // Si la lista está vacía, no hay nada que eliminar
    if(!this.head) return null;
    // Si el elemento a eliminar es el primero, se reasigna el head
    if(this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head
    let previous = null;
    // Se busca el elemento a eliminar
    while(current.value !== value) {
      previous = current
      current = current.next
    }
    // 
    if(current){
      previous.next = current.next
    }
  }
  // Método para imprimir los elementos de la lista
  print() {
    let current = this.head;
    const elements = [];
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    console.log(elements.join(' -> '));
  }
}

// Ejemplo de uso
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(34);
list.append(38);
list.print(); // Salida: 1 -> 2 -> 3
list.delete(3)
list.print()