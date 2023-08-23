/**
 * La herencia es un concepto importante en la programación orientada a objetos que 
 * permite que una clase herede propiedades y métodos de otra clase. En JavaScript, 
 * la herencia se implementa mediante la palabra clave extends que permite a una 
 * clase hija heredar de una clase padre.
 * La clase hija es una nueva clase que se crea a partir de una clase padre existente, 
 * y hereda las propiedades y métodos de la clase padre. La clase hija puede extender o 
 * modificar el comportamiento de la clase padre, y también puede agregar nuevas 
 * propiedades y métodos propios.
 */

class Animal{
    constructor(nombre, color){
        this.nombre = nombre;
        this.color = color;
    }

    comunicarseAnimal(){
        console.log(`El animal ${this.nombre} hace ruido.`);
    }

};

class Chanchito extends Animal{
    constructor(nombre, color,raza){
        super(nombre,color); // Llama al constructor de la clase padre (Animal)
        this.raza = raza;
    }

    comunicarse(){
        console.log(`El chanchito ${this.nombre} de raza ${this.raza} hace oink.`);
    }

    correr(){
        console.log(`El chanchito ${this.nombre} corre como demonio.`);
    }
}

var chanchito1 = new Chanchito("Pato","Azul","Panza de olla");

// Acceder a propiedades y llamar a métodos de la clase padre y de la clase hija
console.log(chanchito1.nombre); // "Pato" (propiedad de la clase padre)
console.log(chanchito1.raza); // "Panza de olla" (propiedad de la clase hija)
console.log(chanchito1.color)

chanchito1.correr()
chanchito1.comunicarse()
chanchito1.comunicarseAnimal()
