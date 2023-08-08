// var: Permite definir una variable en un scope global.
// let: Permite definir una variable en un scope especifico. // es6
// const: Permite definir variables en un scope especifico pero que nunca cambian de valor. // es6


function sayHello(name) {
    console.log('Hola ', name)
}
// creacion y asignacion (inicializacion)
// let name = 'montoya';
// creacion
let name;
// inicializacion
name = 'montoya';
sayHello(name);

// Las constantes debe tener un valor desde el inicio
// Se crean y se asginan al mismo tiempo
const PI = 3.14;
const TIME_VIDEO = 100;

PI = 10; // TypeError: As Asignment to constant variable.
 