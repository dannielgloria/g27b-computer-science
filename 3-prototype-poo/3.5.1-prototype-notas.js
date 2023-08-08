/**
 * En JavaScript, el prototype es un concepto que está relacionado con la herencia 
 * y la cadena de prototipos. Cada objeto en JavaScript tiene una propiedad llamada 
 * prototype, que es una referencia a otro objeto.
 * 
 * Cuando intentas acceder a una propiedad o método en un objeto, JavaScript primero
 *  busca esa propiedad o método en el propio objeto. Si no la encuentra, en lugar de
 *  generar un error, JavaScript sigue buscando en el objeto prototype asociado.
 * 
 * En términos sencillos, puedes pensar en el prototype como un "modelo" o una "plantilla" 
 * de propiedades y métodos que se pueden compartir entre diferentes objetos. 
 * Es una forma eficiente de reutilizar código y agregar funcionalidades a 
 * múltiples objetos sin tener que duplicar el código.
 * 
 * Aquí hay un ejemplo básico para ilustrar cómo funciona el prototype:
 * 
 **/

// Definimos un objeto llamado "Animal" con una propiedad y un método
const Animal = {
    tipo: 'desconocido',
    sonido() {
      console.log('Hace algún sonido');
    }
  };
  
  // Creamos un nuevo objeto llamado "perro" que hereda del objeto "Animal"
  const perro = Object.create(Animal);
  perro.tipo = 'perro';
  perro.raza = 'labrador';
  
  // Accedemos a las propiedades y métodos del objeto "perro"
  console.log(perro.tipo); // Output: "perro"
  console.log(perro.raza); // Output: "labrador"
  perro.sonido(); // Output: "Hace algún sonido"
  
  /**
   * En este ejemplo, creamos un objeto llamado Animal con una propiedad llamada tipo 
   * y un método llamado sonido. Luego, creamos un nuevo objeto llamado perro 
   * utilizando Object.create(Animal), lo que hace que perro herede las propiedades 
   * y métodos del objeto Animal. Posteriormente, podemos acceder y modificar las 
   * propiedades específicas del objeto perro sin afectar el objeto Animal original.
   * 
   * El prototype es un concepto fundamental en JavaScript y se utiliza en muchos 
   * aspectos de la programación en este lenguaje, como la herencia de objetos y 
   * la implementación de clases. A través del prototype, es posible extender y 
   * personalizar el comportamiento de los objetos de forma eficiente.
   */