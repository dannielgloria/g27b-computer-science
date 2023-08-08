// Definimos la clase ( creamos el molde para nuestro objeto)
class Persona {
    constructor(nombre, apellido, edad, generoMusical, genero){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.generoMusical = generoMusical;
        this.genero = genero;
    }

    // hacemos los metodos
    hablar(){
        console.log("Que onda! soy " + this.nombre + " vamos por unas tortas, te late?");
    }

    /**
     * The function calculates a fun fact about the age of the person and prints it to the console.
     */
    decirDatoCurioso(){
        var resultado = (this.edad/2)*56;
        console.log("Sabian que mi edad dividida entre 2 multiplicada por 56 es igual a " + resultado);
    }

    decirDatoCuriosoMusical(){
        var resultado = this.generoMusical
        console.log("Sabias que el genero musical que me gusta tiene "+ resultado.length +" letras")
    }

}

// Crear objeto o instancia de mi objeto
const person1 = new Persona("Juan","Paco pedro de la mar",23,"Cumbias sonideras","Masculino");
const person2 = new Persona("Fulano","De tal",33,"Rock","Masculino");




person2.hablar();
person2.decirDatoCurioso();
person2.decirDatoCuriosoMusical();

person1.hablar();
person1.decirDatoCurioso();
person1.decirDatoCuriosoMusical();

/*
console.log(person1);

console.log(person2);*/