console.log('======= var, let y const =======');

/*
// Ejemplo con VAR
var i=500;
for (var i=0; i<=5; i++ ){
console.log(i);
}
console.log(i);
*/

/*
// Ejemplo con let
let i=500;
for (let i=0; i<=5; i++ ){
console.log(i);
}
console.log(i);
*/

/*
// Ejemplo 2 con let
let numero = 60;
if(true){
  let numero = 55
  console.log('Dentro del if ' +numero);
}
console.log(numero);
*/


// const numeros; // da un error ya que const no se puede solo declarar, debe inicializarse
const numeros = [55, 111, 10];
//numeros.push(500);
//numeros = []; 
console.log(numeros);

// declaracion de variable
// let numero;
// inicializacion de variable
// let numero  = 2;


// Esto genera un error ReferenceError: Cannot access 'suma' before initialization 
// debido a que las funciones flechas no realizan hostoing

// console.log(suma(10, 20));
// const suma = (num1, num2) => {
//   return num1 + num2;
// }

