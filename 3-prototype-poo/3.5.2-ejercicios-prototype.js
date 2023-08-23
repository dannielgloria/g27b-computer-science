/**
 * Crear un objeto "contador" con un método "incrementar" que aumente un valor "valorActual"
 *  en 1 y otro método "obtenerValor" que devuelva el valor actual.
 */
class Contador{
    constructor(valorActual){
        this.valorActual = valorActual;
    }
    incrementar(){
        let valorIncrementado = this.valorActual + 1;

        //return valorIncrementado;
        console.log(valorIncrementado)
    }

    obtenerValor(){
        let mono = this.valorActual
        
        return mono;
        //console.log(resp)
    }
}

var numToIncrement = new Contador(2)
numToIncrement.incrementar() // devuelve el numero 3
numToIncrement.obtenerValor() // devuelve el numero 2


/**
 * Crear una función "ordenarArray" que acepte un array 
 * de números como parámetro y devuelva el array 
 * ordenado de menor a mayor.
 */

function ordenarArray(array) { 
    let arrayOrdenado = array.slice().sort((a,b) => a-b)
    return arrayOrdenado;
}

/**
 * The function ordenarArrayNasty takes an array as input and returns a new array with its elements
 * sorted in ascending order using the bubble sort algorithm.
 * @param array - The `array` parameter is an array of numbers that you want to sort in ascending
 * order.
 * @returns The function `ordenarArrayNasty` returns a new array that is sorted in ascending order.
 */
function ordenarArrayNasty(array) {
    const newArray = array.slice(); // Copia del array original
    const length = newArray.length;

    /* The code snippet you provided is implementing the bubble sort algorithm. */
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (newArray[j]>newArray[j+1]) {
                // Intercambiar elementos si estan en el orden incorrecto
                const temp = newArray[j];
                newArray[j] = newArray[j + 1]
                newArray[j + 1] = temp;
            }
        }
    }

    return newArray
}


const numeros = [8,72,4,1,10,9,8,11]
console.log('Usando dos lineas de codigo',ordenarArray(numeros))
console.log('Usando for',ordenarArrayNasty(numeros))
/**
 * Crear una clase "Rectangulo" con propiedades "ancho" 
 * y "alto" y un método "area" que calcule el área del 
 * rectángulo.
 */


/**
 * Crear una función "factorial" que acepte un número 
 * como parámetro y devuelva su factorial 
 * (el producto de todos los números enteros positivos
 *  desde 1 hasta el número).
 */


/**
 * Crear un objeto "agenda" que permita agregar, 
 * eliminar y buscar contactos. Cada contacto debe 
 * tener un nombre, un email y un teléfono.
 */
