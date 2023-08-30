class Stack{
  constructor(){
    this.items= []; // Usamos un arreglo para poder almacenar los datos en nuestra pila
  }

  push(item){
    this.items.push(item); // Agregamos al final de la pila un elemento
  }

  pop(){ 
    if (this.isEmpty()) { // el metodo isEmty() se realizara mas adelante es parte de los metodos de nuestra clase Stack
      return 'La pila esta vacia';
    }
    return this.items.pop(); // Elimina y muestra(devuelve) el ultimo elemento de nuestra pila/stack
  }

  peek(){// [0,1,2,3,4] este arreglo tiene tamanio 5 y en su posision 4 etsa el valor 4
    return this.items[this.items.length - 1]; // Devolvemos el valor del ultimo elemento de nuestra pila pero no lo eliminamos
  }

  size(){
    return this.items.length;// Devuelve el numero de elemenotos que se encuentran en la pila
  }

  isEmpty(){
    return this.items.length === 0; // verificar si nuestra pila esta vacia
  }

}

// Uso de la pila

const pila = new Stack();

pila.push(95);
pila.push(66);
pila.push(22);
pila.push(37);
pila.push(77);
pila.push(19);

console.log(pila)

console.log(pila.pop()); // 19
console.log(pila)
console.log(pila.peek()); // 77
console.log(pila)
console.log(pila.size())