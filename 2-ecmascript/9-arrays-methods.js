const numeros = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
// map: itera el arreglo y nos puede devolver cada valor.
// forEach:  itera el arreglo pero no nos puede devolver cada valor.
// reduce: reduce los elementos de un arreglo en un solo valor.
// push: agrega elementos a un arreglo al final.
// splice: borra n elementos de un arreglo a partir de una posicion
numeros.splice(4, 1);

// slice: obtener una parte del arreglo en nuevo arreglo
const newArreglo = numeros.slice(1, 4);
newArreglo[0] = 999999;
console.log('newArreglo: ', newArreglo);
console.log('numeros: ', numeros);

// includes: verfificar si un elemento esta contenido en un array
if(numeros.includes(20)) {
    console.log('si tengo el 20');
} else {
    console.log('no tengo el 90');
}

// filter: devuelve un nuevo arreglo de todos los elementos que cumplen una condicion
const pares = numeros.filter((element) => element % 2 === 0);
console.log('pares: ', pares);

// indexOf: si encuentra el numero lo retorna y sino retorna -1
const foundedNumber = numeros.indexOf(20);
const noFoundedNumber = numeros.indexOf(2000);
console.log(foundedNumber, noFoundedNumber);

// find: si encuentra el numero lo retorna y sino retorna undefined
const foundedNumber2 = numeros.find(element => element === 20);
const noFoundedNumber2 = numeros.find(element => element === 2000);
console.log(foundedNumber2, noFoundedNumber2);

// findIndex: si lo encuentra devuelva la poscion y sino devuelve -1
const foundedNumber3 = numeros.findIndex(element => element === 20);
const noFoundedNumber3 = numeros.findIndex(element => element === 2000);
console.log(foundedNumber3, noFoundedNumber3);

// Preformance de array methods vs loops vs loops(of/in)
// https://leanylabs.com/blog/js-forEach-map-reduce-vs-for-for_of/

console.log(numeros);