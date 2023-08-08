/**
 * La búsqueda por comparación, también conocida como búsqueda secuencial, 
 * es un método sencillo de búsqueda en el que se compara cada elemento de una 
 * lista secuencialmente con el elemento objetivo hasta encontrar una coincidencia 
 * o recorrer toda la lista sin éxito.
 */

// la funcion debe retornar -1
busquedaComparacion(){

}








const arregloBase = [3, 6, 9, 12, 15, 18, 21];
const elementoBusqueda = 15;

const resultIndex = busquedaComparacion(arregloBase, elementoBusqueda);

if (resultIndex !== -1) {
  console.log(`El elemento ${elementoBusqueda} se encuentra en el índice ${resultIndex}.`);
} else {
  console.log(`El elemento ${elementoBusqueda} no se encontró en la lista.`);
}
