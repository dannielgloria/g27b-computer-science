/* The "Pais" class is a constructor function that creates objects with properties for a location's
name, population, and coordinates, and includes a method to log information about the object. */
class Pais{
    /**
     * This is a constructor function that creates an object with properties for a location's name,
     * population, and coordinates.
     * @param nombre - This parameter represents the name of a location or place.
     * @param noPoblacion - "noPoblacion" is a parameter that represents the number of people living in
     * a certain location or area. It is likely used in the context of a geographic or demographic
     * analysis.
     * @param coordenadas - The "coordenadas" parameter is likely an object or array that contains the
     * latitude and longitude coordinates of the location being represented by the constructor. These
     * coordinates can be used to plot the location on a map or perform other geographic calculations.
     */
    constructor(nombre, noPoblacion, coordenadas){
        this.nombre = nombre;
        this.noPoblacion = noPoblacion;
        this.coordenadas = coordenadas;
    }

    /**
     * The "info" function logs information about a country's name, coordinates, and population.
     */
    info(){
        console.log("El pais "+ this.nombre + " se encuentra en las coordenadas " + this.coordenadas+ " y tiene una poblacón de " + this.noPoblacion +" habitantes");
    }
}

/* `var mexico = new Pais("Méjico", "126.7 millones","23.634501, -102.552784");` is creating a new
object of the `Pais` class with the name "Méjico", a population of "126.7 millones", and coordinates
of "23.634501, -102.552784". The object is then assigned to the variable `mexico`. */
var mexico = new Pais("Méjico", "126.7 millones","23.634501, -102.552784");

/* The line `var tangamandapio = new Pais("Tangamandapio", 2, "0,-0");` is creating a new object of the
`Pais` class with the name "Tangamandapio", a population of 2, and coordinates of "0,-0". The object
is then assigned to the variable `tangamandapio`. */
var tangamandapio = new Pais("Tangamandapio", 2, "0,-0");

/* `console.log(mexico);` is logging the `mexico` object to the console, which will display the
object's properties and their values. */
console.log(mexico);
/**
 * pais{
 *  coordenadas: "23.634501, -102.552784",
 *  noPoblacion: "126.7 millones",
 *  nombre: "Méjico"
 * }
 */

console.log(tangamandapio);
/**
 * pais{
 *  coordenadas: "0, -0",
 *  noPoblacion: 2,
 *  nombre: "Tangamandapio"
 * }
 */

/* `mexico.info();` is calling the `info()` method of the `mexico` object, which logs information about
the country's name, coordinates, and population to the console. */
mexico.info();
tangamandapio.info();
