// operadores aritmeticos
// * 
// / 
// + 
// -
// %
// **

// operadores relaciones/logicos
// || 
// && 
// !
  
// incremento/decrementos
// num++ post-incremento
// num-- post-decremento
// ++num pre-incremento
// --num pre-decremento
/* En resumen, las diferencias radican en cuándo ocurre el incremento o decremento
 en relación con la evaluación de la expresión y si se devuelve el valor original
 o el valor modificado. Las opciones de pre-incremento y pre-decremento son útiles
 cuando necesitas operar con el valor modificado en la misma expresión, mientras
 que las opciones de post-incremento y post-decremento son útiles cuando deseas
 utilizar el valor original y luego modificar la variable.
 */
let numero = 10;
let numero2 = numero++; // numero2 = 10 // numero = 11
let numero3 = ++numero; // numero3 = 11 // numero = 11
console.log(numero, numero2, numero3);

// operadores de asignacion compuestos
let ejemplo = 10

console.log(ejemplo)
ejemplo += 3

console.log(ejemplo)
// += 
// -=

// operadores de comparacion 
// 3 === "3" FALSE
// 3 === 3 TRUE
// 3 !== 3 FALSE
// 3 !== "3" TRUE
// 3 == "3" TRUE
// 3 != "2" TRUE
// 5.99099999<6 
// 6>6 
// 6<=6 
// 6>=6