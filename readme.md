# Computer science

Este documento es una **sintesis de la kata** (clases, campus, tareas y proyectos) **más temas extra** (estrechamente relacionados) para brindar la **posibilidad** al estudiante **de ampliar** sus **conocimientos**. Para su mejor aprovechamiento se recomienda **leerlo como guía** y **ampliar sus notas** con base en **investigación/autoestudio** y **ejercicios** subirlo a su propio repositorio.

**Estructura de carpetas sugerida**

- kata-1

  - g99-nombre-de-la-kata-1
  - g99-nombre-de-la-kata-1-juanito-banana
- kata-2

  - g99-nombre-de-la-kata-1
  - g99-nombre-de-la-kata-1-juanito-banana

## Temario

1. [Intro a la logica de programacion](#intro-a-lenguajes-de-programacion)
2. [EcmaScript](#ecmascript)
3. [Prototype y POO](#prototype-y-poo)
4. [Manipulacion del DOM](#manipulacion-del-dom)
5. [Consumo de apis](#consumo-de-apis)
6. [Presentaciones](#presentaciones)
7. [Informacion y recursos extra](#informacion-y-recursos-extra)
8. [Glosario](#glosario)

## Introducción a la logica de programacion

### Lógica

Es un razonamiento en que las ideas se desarrollan en forma coherente, sin contradicciones (entre ellas) y explicitamente.

### **Fases del análisis de un problema**

1. Análisis (entradas, proceso, salidas).
2. Diseño de un algoritmo.
3. Transformación del algoritmo en código.
4. Ejecución y validación.
5. Pruebas de aceptación.

**Requerimientos funcionales**
Son aquellos requerimientos que tienen que ver con la solucion del usuario.

**Requerimientos no funcionales**
Son caracteristicas que un sistema necesita para funcionar adecuadamente pero que no aportan valor operativo al usuario.

### Algoritmo

Secuencia de instruccions o pasos que van en ordener para resolver un problema.

#### Partes de un algoritmo

* Entrada.
* Proceso.
* Salida.

### Representaciones de un algoritmo

* Lenguaje natural.
* Diagrama de flujo.
* Pseudocódigo.
* Código.
* Pruebas de escritorio.

#### Lenguaje del natural

Expresar un problema con nuestras propias palabras y sin usar tecnicismos de desarrollo. Es el lenguaje con el que nos expresamos comúnmente.

#### Diagrama de flujo

Forma gráfica de representar un algoritmo. Tambien es util para documentar procesos de un sistema.

##### Símbologia

* Inicio (óvalo).
* Entrada / Lectura (paralelogramo).
* Proceso (rectángulo).
* Descisión (rombo).
* Documento / Impresión.
* Fin (óvalo).
* Conectores (circulos o líneas).
* Flechas.

Todos los diagramas de Ingeniería de software se basan en [UML](https://drive.google.com/file/d/0B_mAPkMcdtUsMHgtUWZJMWZvYms/view?resourcekey=0-ITkYE1KVVbh_tCutVSL_ew) (Unified Model Language).

#### Pseudocódigo

Lenguaje hibrido entre el natural y el codigo de programacion, utiliza ciertas convenciones de programacion pero sigue siendo entendible para las personas.

* "INICIO".
* “Leer”.
* “Si… entonces…”
* “Si no … entonces…”
* “Mientras…”
* “Si y sólo si --- entonces”
* “Imprimir”.
* “FIN”.

#### Código

Resolver el problema mediante algín lenguaje de programación.

#### Prueba de escritorio

Es probar mediante valores reales si nuestro algoritmo soluciona correctamente el problema.

## ECMAScript

Es el estándar que la empresa del mismo nombre definió para JavaScript en el año 2015 (ES6) y encarga de regir como debe ser interpretado y cómo debe funcionar el lenguaje JavaScript.

### Lista de funcionalidades

* Let y const.
* Arrow functionts (short and long form).
* For in/ for of.
* Map vs forEach.
* Classes.
* Promises.
* Default parameters.
* Spread operator.
* Rest operator.
* Object entries, keys y values.
* JS Modules.
* Literal templates / Template strings.
* Map y Set (Estructura de datos)
* Promises
* Async / await.
* Finally (Promises).
* RegExp.
* Métodos de arreglos (push, slice, splice, indexOf, includes, find, findIndex, map, filter, reduce, reverse, forEach).

#### Bonus JS

* Tablas de verdad y tipos de operadores.
* Valor por defecto de una variable.
* Cortocircuito ?.
* Paso por referencia y valor.
* Diferencia entre map y forEach.
* Tipos de funciones en JS.
* Valor por defecto de una variable.
* Operador de cortocircuito ?.
* Hoisting.
* Tipos de salida de una función.
* Paso por referencia y valor.
* Tablas de verdad y tipos de operadores.
* Tipos de funciones en JS.
* Delete, type of, instanceof.
* Destructuring.

## Protototipos y POO

Un prototipo es un objeto que sirve como modelo para crear otros objetos. En programación, se utiliza para compartir propiedades y métodos entre diferentes objetos.

En JavaScript, cada objeto tiene un prototipo. Este prototipo se utiliza para buscar propiedades y métodos que no están definidos directamente en el objeto. Si una propiedad o método no se encuentra en el objeto, JavaScript busca en su prototipo, y si no lo encuentra allí, sigue buscando en el prototipo del prototipo, y así sucesivamente, hasta llegar al prototipo base que es el objeto global.

Por ejemplo, si tenemos un objeto llamado "persona" que tiene un método llamado "saludar", pero no tiene una propiedad llamada "edad", y queremos acceder a la propiedad "edad" de "persona", JavaScript buscará primero en "persona", luego en su prototipo, que es "Object", y finalmente en el prototipo base, que es el objeto global. Si no encuentra la propiedad en ninguno de ellos, devuelve "undefined".

Los prototipos son especialmente útiles en JavaScript porque permiten la herencia de propiedades y métodos entre objetos. Por ejemplo, podemos crear un objeto "estudiante" que herede propiedades y métodos de "persona" a través de su prototipo.

### Intro

**Tipos de datos en programación (agnóstico del lenguaje)**

* Boolean.
* String.
* Array.
* Objetos.
* Numeros.
* Numeros decimales.

**Fuerte y debilmente tipado**

```
// debilmente tipado JS
let numero = 10
let numero2 = 99.7
numero = "este es numero"
```

```
// fuertemente tipado Java
int numero = 10;
double numero2 = 99.7
numero = "este es numero" // error
```

**Jerga de objetos**

clase = prototipo = plantilla = modelos
objeto concreto = instancia = miembro = variable miembro

// json => key: value
{
    "person": {
        name: "jose m"
    }
}

// objeto js => propiedad y valor
const person = {
    name: "jose m"
}

// poo => atributos y valor

### Prototype

Los **prototipos** son un mecanismo mediante el cual los objetos en JavaScript heredan características entre sí. Funcionan para **proporcionar mecanismos de herencia.**

Los objetos pueden tener un  **objeto prototipo** , el cual actúa como un objeto plantilla que hereda métodos y propiedades.

**Cadena de Prototipos**

Un objeto prototipo del objeto puede tener a su vez otro objeto prototipo, el cual hereda métodos y propiedades, y así sucesivamente. Esto es conocido con frecuencia como la **cadena de prototipos**.

### POO

Es un paradigma de programación centrado en:

* Plantillas base (clases). => **Auto**
* Objetos, son elementos concretos de una clase.=> **mazda, tsuru**
* Atributos/Propiedades: Son las caracteristicas de los objetos. => **color, dimensiones, modelo**.
* Métodos/Funciones: Son las acciones puede realizar un objeto. => arranca(), frena().

#### Formas de crear objetos en JS

##### Literal objects.

```
const pikachu = {
  name: 'pikachu',
  height: 90
  camina: function() {
    console.log('C-A-M-I-N-A-R');
  }
}
```

##### new Object.

```
const pikachu = new Object();
pikachu.name: 'pikachu',
pikachu.height: 90
```

##### Funcion constructora

```
function createPokemon(name, height) {  
  const auto = {  
    name: name,  
    height: height,  
  }
  return auto;  
}  
const pikachu = createPokemon('pikachu', 90);
```

##### Funcion constructora con new y this.

```
function createPokemon(name, height) {
    this.name: name,
    this.height: height,
}
const pikachu = new createPokemon('pikachu', 90);
```

##### Prototype (herencia).

```
function Pokemon(name, height) {
  const auto = {
    name: name,
    height: height,
  }
  return auto;
}
const pikachu = createPokemon('pikachu', 90);function Pokemon(name, height) {
    this.name = name;
    this.height = height;
}

const pikachu = new Pokemon('pikachu', 90);
console.log(pikachu.height);

Pokemon.prototype.camina = function() {
      console.log('C-A-M-I-N-A-R')
};
pikachu.camina();
```

##### Sugar Syntaxis.

```
class Poke {
    constructor(name, type, power) {
        this.name = name;
        this.type = type;
        this.power = power;
    }
  
    attack(bonus) { 
        console.log(`${this.power}`, bonus);
    }

    alive(points) { 
        if (points > 1) {
            return true;
        }
        return false;
    }
}

class FlightPoke extends Poke {
    constructor(name, type, power, alas) {
        super(name, type, power);
        this.alas = alas;
    }
    flight() {
        console.log('yo vuelo');
    }
}

class WaterPoke extends Poke {
    constructor(name, type, power, aletas) {
        super(name, type, power);
        this.aletas = aletas;
    }
    swim() {
        console.log('yo nado');
    }
}

const squirtle = new WaterPoke('Squirtle', 'Water', 'pulse water', 'tengo 4 aletas');
const pidgey = new FlightPoke('Pidgey', 'Flight', 'aerial ace', 'tengo 2 alas');

console.log(squirtle)
squirtle.attack(99);
squirtle.swim();
pidgey.attack(10);
pidgey.flight();
// squirtle.flight();
// La linea anterior produce un error porque squirtle no tiene ese metodo
```

**Nota:** Recuerde la exitencia de Object.create y { ...props } para generar nuevos objetos a partir de otros sin mantener la referencia.

### Manipulacion del DOM

working...

### Presentaciones

Se encuentran en la  [carpeta assets](./assets/) de este mismo repo.

### Informacion y recursos extra

working...

### Glosario

El glosario se encuentra ubicado en el siguiente [repo](https://github.com/montoyaguzman/gloasario-techie)
