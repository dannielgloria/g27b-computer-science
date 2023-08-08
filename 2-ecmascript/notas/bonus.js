const harryPotter = {
    name: "Harry Potter",
    species: "human",
};

// delete
console.log(harryPotter);
// delete harryPotter.name;
delete harryPotter['name'];
console.log(harryPotter);
// RETO: Borrar n propiedades de un objeto

// typeof
console.log(typeof harryPotter);

// instanceof
console.log(harryPotter instanceof Object);