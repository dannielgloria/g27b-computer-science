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

let alumno = Object.create(persona);
alumno.matricula = '2133010323';

/*console.log(empleado.nombre);
console.log(empleado.edad);
console.log(empleado.trabajo);
empleado.saludar();

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.trabajo);
persona.saludar();
*/
console.log(alumno);
console.log(empleado);
console.log(persona);




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