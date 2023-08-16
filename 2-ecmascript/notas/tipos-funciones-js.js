/**
 * Las diferencias clave entre las funciones flecha, 
 * las funciones anónimas y las funciones autoinvocadas 
 * (IIFE, por sus siglas en inglés) en JavaScript se encuentran 
 * en su sintaxis y su comportamiento en relación con el alcance
 *  y la ejecución. Aquí te explico cada una de ellas
 */

// 1 arrow functions
/**
 * Las funciones flecha son una forma más concisa de escribir 
 * funciones en JavaScript. Son funciones anónimas que se definen 
 * utilizando la sintaxis de flecha (=>). Una característica 
 * importante de las funciones flecha es que heredan automáticamente 
 * el valor de this del contexto en el que están definidas, lo que las 
 * hace útiles en ciertos casos.
 */
const suma = (num1, num2) => {
    return num1 + num2;
}

const sumaNueva1 = suma(4,5) + 5





function suma2(num1, num2){
    return num1 + num2;
}

const sumaNueva = suma(5,4)
const sumaNueva1 = sumaNueva+5



// 2 funciones anonimas
/**
 * Las funciones anónimas son funciones que no tienen un nombre específico. 
 * Pueden ser definidas utilizando la palabra clave function y se utilizan 
 * comúnmente como argumentos para otras funciones (por ejemplo, como callbacks). 
 * Pueden ser asignadas a variables, objetos u otras estructuras de datos.
 */
const array = [1,2];
array.forEach(function(element) {
    console.log(element);
})

// 3 funciones autoinvocadas IIFE
/**
 * Las IIFE son funciones anónimas que se invocan inmediatamente después de ser 
 * definidas. Se utilizan para crear un alcance local, evitando la contaminación 
 * del ámbito global con variables temporales y funciones auxiliares. Solían ser 
 * especialmente útiles antes de que existieran los bloques de ámbito (let y const), 
 * ya que las variables declaradas dentro de una IIFE permanecen dentro de su propio 
 * ámbito.
 */
var name = 'montoya';
(function() {
    console.log('bienvenido!!', name);
})();

(() => {
    console.log('BYE!!');
})();
  
/*
(contenido, mediante una funcion anonima o flecha)()ejecutar al contenido
/*
(() => {
    
})()

(function(){
    
})()
*/