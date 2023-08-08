let arregloLineal = [2,5,-2,8,10]

// for(let i = 0; i < arregloLineal.length; i++){
//     console.log(`Indice: ${i} Valor: ${arregloLineal[i]}`)
// }

let arregloMultidimensionales = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

// console.log(arregloMultidimensionales[0][0])
// console.log(arregloMultidimensionales[2][0])

let arregloTridimensional = [
  [
    [
      2,5
    ],
    [
      8,4
    ]
  ],
   [
    [
      6,5
    ],
    [
      8,4
    ]
  ]

]

// console.log(arregloTridimensional[0][0][0])


// [Pilas]
// LIFO (Last In First Out)
let pila = []

pila.push(8)

pila.pop()

// console.log(pila[pila.length - 1])

class Pila {
  constructor(){
    this.pila = []
  }

  push(nuevoValor){
    this.pila.push(nuevoValor)
  }

  pop(){
    return this.pila.pop()
  }

  peek() {
    return this.pila[this.pila.length - 1]
  }

  size(){
    return this.pila.length
  }

  print(){
    console.log(`Pila Array: ${this.pila}`)
  }

}

// Utilizar la pila
let pila1 = new Pila()
// Agregamos datos
pila1.push(1)
pila1.push(2)
pila1.push(3)
// Imprimimos
// pila1.print()
// Eliminamos el ultimo dato del arreglo de la pila
// pila1.pop()
// Eliminar el ultimo dato del arreglo de la pila y tambien nos va devoler ese dato
// let datoEliminado = pila1.pop();

// pila1.print()
// console.log(`Dato eliminado: ${datoEliminado}`)


class PilaObjeto {
  constructor(){
    this.pila = {}
    this.contador = 0
  }

  push(nuevoValor){
    this.pila[this.contador] = nuevoValor
    this.contador++
  }

  pop() {
    let datoEliminado = this.pila[this.contador - 1]
    delete this.pila[this.contador - 1]
    this.contador--
    return datoEliminado
  }

  peek(){
    return this.pila[this.contador - 1]
  }

  size(){
    return this.contador
  }

  print(){
    console.log(this.pila)
  }
}

let pila2 = new PilaObjeto()

// Agregamos datos
pila2.push("Hola")   //Primer elemento
pila2.push(true)
pila2.push(3)
pila2.push([1,2,3])

// Imprimimos
// pila2.print()

// Eliminamos el ultimo dato del arreglo de la pila
// let valorEliminado2 = pila2.pop()
// console.log(`Valor Objeto eliminado : ${valorEliminado2}`)

// console.log(pila2.peek())
// console.log(pila2.size())
// pila2.print()

// for(let i = 0; i <= pila2.size(); i++){
//   console.log(`Se elimino el elemento: ${pila2.pop()}`)
//   if(pila2.size() == 1){
//     console.log(`El Primer elemento en agregarse y ultimo en eliminarse es: ${pila2.pop()}`)
//   }
// }


let pilaOriginal = new Pila()
let pilaAuxiliar = new Pila()

pilaOriginal.push(1)
pilaOriginal.push(2)
pilaOriginal.push(3) //3
pilaOriginal.push(4)
pilaOriginal.push(5)


// pilaOriginal.forEach(element => {
//     if(element !== 3){
//       pilaAuxiliar = pilaOriginal.pop()
//     } else {
//       let elementoEliminado = pilaOriginal.pop()
//       console.log(`Se elimino el elemento: ${elementoEliminado}`)
//       pilaAuxiliar.forEach(element => {
//         pilaOriginal.push(element)
//       });
//     }
//   }
// );

for(let i = 0; i < pilaOriginal.size(); i++){
  if(element !== 3){
    pilaAuxiliar = pilaOriginal.pop()
  } else {
    let elementoEliminado = pilaOriginal.pop()
    console.log(`Se elimino el elemento: ${elementoEliminado}`)
    for(let o = 0; o < pilaAuxiliar.size(); o++){
      pilaOriginal.push(element)
    }
  }
}






