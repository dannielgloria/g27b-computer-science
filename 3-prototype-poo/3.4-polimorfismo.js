/**
 * El polimorfismo es otro concepto clave en la programación orientada a objetos que permite 
 * que diferentes objetos se comporten de manera similar o intercambiable, a pesar de tener 
 * implementaciones y estructuras diferentes. En otras palabras, el polimorfismo permite 
 * que objetos de diferentes clases compartan una interfaz o un comportamiento común, lo que
 *  facilita la reutilización de código y la flexibilidad en el diseño de sistemas.
 * 
 * En JavaScript, el polimorfismo se puede lograr mediante la implementación de métodos con 
 * el mismo nombre en diferentes clases, de manera que puedan ser invocados de manera similar, 
 * independientemente del tipo de objeto al que se apliquen. 
 */

class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    hablar() {
      console.log(`El animal ${this.nombre} hace ruido.`);
    }
}
  
  class Perro extends Animal {
    hablar() {
      console.log(`El perro ${this.nombre} ladra.`);
    }
  }
  
  class Gato extends Animal {
    hablar() {
      console.log(`El gato ${this.nombre} maúlla.`);
    }
  }
  
  // Crear instancias de las clases Animal, Perro y Gato
  var animal1 = new Animal("Animal1");
  var perro1 = new Perro("Perro1");
  var gato1 = new Gato("Gato1");
  
  // Llamar al método hablar() en diferentes instancias
  animal1.hablar(); // "El animal Animal1 hace ruido."
  perro1.hablar(); // "El perro Perro1 ladra."
  gato1.hablar(); // "El gato Gato1 maúlla."