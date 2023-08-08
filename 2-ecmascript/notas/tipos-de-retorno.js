// // 1. Funciona que nos retorna un valor
// function suma(numero1, numero2) {
//     let resultado = numero1 + numero2;
//     return resultado;
// }

// // 2. Void, sin retorno - algo que sucede sin que me devuelva
// function sayHello() {
//     console.log('hola!');
// }

// // 3. Void pero realiza accion sobre valores
// let resultado = 0;
// function suma(numero1, numero2) {
//     resultado = numero1 + numero2;
// }
// console.log('resultado: ', resultado);


let resultadoResta = 0;
function resta(numero1, numero2) {
    resultadoResta = numero1 - numero2;
}
const r = resta(8, 4);
console.log('resultadoResta: ', resultadoResta, r);

function suma(numero1, numero2) {
    let resultado = numero1 + numero2;
    return resultado;
}
const resultado = suma(3, 5);
console.log('resultado: ', resultado);