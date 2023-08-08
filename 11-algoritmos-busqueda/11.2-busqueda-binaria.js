/**
 * La Búsqueda Binaria (Binary Search) es un algoritmo eficiente para buscar un 
 * elemento en una lista ordenada. El algoritmo divide repetidamente la lista en 
 * dos mitades y compara el elemento buscado con el valor del elemento central. 
 * Si el elemento buscado es igual al valor del elemento central, la búsqueda 
 * es exitosa. Si el elemento buscado es menor, se busca en la mitad izquierda 
 * de la lista; si es mayor, se busca en la mitad derecha. Este proceso se repite 
 * hasta que el elemento sea encontrado o hasta que el rango de búsqueda se agote.
 */

function busquedaBinaria(arreglo, target) {
    let izquierda = 0
    let derecha = arreglo.length - 1

    while (izquierda <= derecha) {
        const mitad = Math.floor((izquierda + derecha )/2)

        if (arreglo[mitad]===target) {
            console.log("te encontre")
            return mitad // Encontro el valor en la mitd del arreglo
        } else if (arreglo[mitad]<target) {
            izquierda = mitad + 1 // Busca en la mitad derecha
            console.log("Busca en la mitad derecha")
        } else {
            derecha = mitad - 1 // busca en la mitad izquierda
            console.log("Busca en la mitad izquierda")
        }
    }

    return -1 // el elemento no se encontro
}


const arregloBusqueda = [0, 4, 7, 10, 14, 23, 45, 47, 53];
const elementoBuscar = 3;

const resultIndex = busquedaBinaria(arregloBusqueda, elementoBuscar);

if (resultIndex !== -1) {
  console.log(`El elemento ${elementoBuscar} se encuentra en el índice ${resultIndex}.`);
} else {
  console.log(`El elemento ${elementoBuscar} no se encontró en la lista.`);
}
