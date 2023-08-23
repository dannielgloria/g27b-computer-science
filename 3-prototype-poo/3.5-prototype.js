/**
 * En términos más sencillos, puedes pensar en un prototipo como un "modelo" que 
 * contiene propiedades y métodos que otros objetos pueden "heredar". 
 * Esto permite la reutilización de código y la construcción eficiente de objetos 
 * con funcionalidades similares.
 * 
 * La mayoría de los objetos en JavaScript están basados en prototipos. 
 * La forma en que se establece la herencia de prototipos ha evolucionado a lo 
 * largo de las versiones de JavaScript. Antes de la introducción de las clases en 
 * ES6 (ECMAScript 2015), la herencia de prototipos se lograba utilizando funciones 
 * constructoras y modificando el prototipo de dichas funciones. 
 * Con las clases, la sintaxis se hizo más intuitiva, pero en última instancia, 
 * todavía se basa en prototipos en la implementación subyacente.
 */
// Creando un objeto prototipo

let persona = {
    nombre: 'Daniel',
    edad: 27,
    saludar: function(){
        console.log(`Quiubolas mi ñero me dicen el mike pero tu me puedes decir ${this.nombre} y tengo ${this.edad}, como la baseball papirrin.`);
    }
    /*
    Funcion flecha

    saludar: () => {
        console.log(`Quiubolas mi ñero me dicen el mike pero tu me puedes decir ${this.nombre} y tengo ${this.edad}, como la baseball papirrin.`);
    }
    */
}

// Creando un objeto que hereda del prototype persona

let empleado = Object.create(persona);
empleado.trabajo = 'Taquero';

/**
 * empleado = {
 *  nombre: 'Daniel',
    edad: 27,
    trabajo: 'Taquero'
 * }
 */

let alumno = Object.create(persona);
alumno.matricula = '2133010323';
/**
 * alumno = {
 *  nombre: 'Daniel',
    edad: 27,
    matricula: '2133010323'
 * }
 */

console.log(persona);
console.log(empleado);
console.log(empleado.nombre, empleado.edad, empleado.trabajo);
empleado.saludar()
console.log(alumno.nombre,alumno.edad,alumno.matricula, alumno.trabajo);
alumno.saludar()
/*console.log(empleado.nombre);
console.log(empleado.edad);
console.log(empleado.trabajo);
empleado.saludar();

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.trabajo);
persona.saludar();
*/





//Prototipo puro y duro

const plancha = {
    temperaturaC: 23,
    color: "rojo",
    subirTemperatura(){
        var nuevaTemperatura= this.temperaturaC + 70;
        console.log(`La plancha esta bien caliente mira tiene una sensasion termica de ${nuevaTemperatura} grados centigrados, apoco no esta cool?`);
    }
}

plancha.subirTemperatura();