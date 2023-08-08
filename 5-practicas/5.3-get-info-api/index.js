console.log('1');
let pokemons = [];

// Example call to API
/**
 * Cumplir con un contrato
 * get: https://pokeapi.co/api/v2/pokemon
 * NOTAS
 * 1. Al llamar una API obtenemos una promesa (relacionado asincronia)
 */
fetch('https://pokeapi.co/api/v2/pokemon') // return Promise
    .then(response => response.json()) // Otras opciones para esperar promesas: callbacks, then, await
    .then(data => data.results)
    .then(pokemons => {
        console.log('2');
        for (let i=0; i<pokemons.length; i++) {
            document.write(`<p>Name: ${pokemons[i].name} </p>`);
        }
    })
    
console.log('3');
console.log('pokemons: ', pokemons);