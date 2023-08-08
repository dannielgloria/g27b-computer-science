// function opera(operador, numeros) {
//     let result = 0;
//     if (operador === '+') {
//         result = numeros.reduce((previousValue, currentValue) =>  previousValue + currentValue );
//         // reduce = reducir = compactar
//     } else if (operador === '-') {
//         // resta
//         result = numeros.reduce((previousValue, currentValue) =>  previousValue - currentValue );
//     } else if (operador === '*') {
//         // resta
//         result = numeros.reduce((previousValue, currentValue) =>  previousValue * currentValue );
//     }
//     return result;
// }
// const resultado = opera('*', [9, 10, 11, 30, 40]);
// console.log('resultado: ', resultado);


function opera(operador, ...numeros) { // rest operator ...numeros
    let result = 0;
    if (operador === '+') {
        result = numeros.reduce((previousValue, currentValue) =>  previousValue + currentValue );
        // reduce = reducir = compactar
    } else if (operador === '-') {
        // resta
        result = numeros.reduce((previousValue, currentValue) =>  previousValue - currentValue );
    } else if (operador === '*') {
        // resta
        result = numeros.reduce((previousValue, currentValue) =>  previousValue * currentValue );
    }
    return result;
}
const resultado = opera('*', 9, 10, 11, 30, 40);
// const resultado = opera('*', '+', 10, 11, 30, 'jose m'); 
// NaN porque aunque el rest operator los recibe, el reduce solo suma numeros
console.log('resultado: ', resultado);


// EJEMPLO CON VALOR QUE SUMA AL FINAL
// const array1 = [1, 2, 3, 4];
// // 0 + 1 + 2 + 3 + 4
// const initialValue = 2;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// // expected output: 10