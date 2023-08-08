// 1 arrow functions
const suma = (num1, num2) => {
    return num1 + num2;
}

const sumaNueva1 = suma(4,5) + 5





function suma2(num1, num2){
    return num1 + num2;
}

const sumaNueva = suma(5,4)
const sumaNuevaNueva = sumaNueva+5



// 2 funciones anonimas
const arr = [1,2];
arr.forEach(function(element) {
    console.log(element);
})

// 3 funciones autoinvocadas IIFE
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