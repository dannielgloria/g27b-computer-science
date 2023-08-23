//Cola
// Cola
// FIFO (First In First Out)
class Cola {
  constructor(){
    this.cola = []
  }
  // Metodos
  // Encolar: agregar elementos a la cola
  enqueue(element){
    this.cola.push(element)
  }

  // Desencolar: sacar elementos de la cola
  dequeue(){
    return this.cola.shift()
  }
  // Peek: retornar el primer elemento de la cola, sin quitarlo de la cola
  peek(){
    if(this.isEmpty()){
      return "La cola esta vacia"
    }
    return this.cola[0]
  }
  // Size: retornar el tamaño de la cola
  size(){
    return this.cola.length
  }
  //isEmpty: retorna si la cola esta vacia o no
  isEmpty() {
    if(this.cola.length === 0){
      return true
    } else {
      return false
    }
  }

  // print: imprime el contenido de la cola
  print() {
    console.log(this.cola)
  }

  //front: retorna el primer elemento de la cola y eliminarlo
  front(){
    if(this.isEmpty()){
      return "La cola esta vacia"
    }
    const frontElement = this.cola[0]
    this.dequeue() //Eliminar el elemento Frontal de la cola
    return frontElement
  }

  //back: retorna el ultimo elemento de la cola
  back(){
    return this.cola[this.cola.length - 1]
  }
}

let cola = new Cola()

cola.enqueue(1) //Primer elemento
cola.enqueue("Hola")
cola.enqueue(true)

console.log(`Se elimino: ${cola.dequeue()}`) // 1
console.log(`El primer elemento es: ${cola.front()}`)
console.log(`El ultimo elemento es: ${cola.back()}`)
console.log(`El tamaño de la cola es: ${cola.size()}`)
console.log(`La cola esta vacia: ${cola.isEmpty()}`)
console.log(`El primer elemento es: ${cola.peek()}`)

cola.print()