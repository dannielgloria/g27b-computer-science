
var autos = ['Lamborghini', 'McLaren', 'Maserati'];

// funcion anonima
/*autos.forEach( function(auto){
    console.log(auto);
});*/

// funcion flecha/arrow
/*autos.forEach( (auto) => {
    console.log(auto);
});*/

// funcion flecha/arrow
autos.forEach( auto => {
    console.log(auto);
});

/** Syntaxis de las funciones flecha
// Funcion flecha ordinaria (con muchos parametros y cuerpo)
(param1, param2, paramN) => { //cuerpo de la funcion }

// Funcion flecha con 1 solo param (no requiere parentesis en los parametros)
param1 => { //cuerpo de la funcion }

// Funcion flecha con una sola linea como retorno (no tiene cuerpo {})
(param1, param2, paramN) => // result

// Funcion flecha con 1 solo param y una sola linea como retorno (no tiene ni parantesis ni cuerpo)
param1 => //result

// Funcion flecha sin parametros
() => //result
*/

const suma = (num1, num2) => {
  return num1 + num2;
}

const suma2 = (num1, num2) => num1 + num2;

/**
 * The function "sayHello" logs a greeting message with the provided name.
 */
const sayHello = name => {
  console.log('Hola ', name);
}

const sayHello2 = name => console.log('Wenas joven ', name);

const sayGoodBye = () => console.log('chao!');

console.log(suma(10, 20));
console.log(suma2(20, 50));
sayHello('Montoya');
sayHello2('Montoya');
sayGoodBye();

// Las funciones flecha se pueden guardar en variables
// console.log(sayHello());
