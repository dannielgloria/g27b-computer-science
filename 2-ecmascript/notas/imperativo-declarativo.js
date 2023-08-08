const numeros = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

// Imperativo
/*
let paresFor = [];
for (let i=0; i <= numeros.length; i++) {
    if (i % 2 === 0) {
      paresFor.push(numeros[i]);
    }
}
console.log(`pares (for): `, paresFor);*/

// Declarativa - Funcional
const pares = numeros.filter((element) => element % 2 === 0);
console.log('pares (filter): ', pares);