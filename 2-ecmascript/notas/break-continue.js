const numeros = [10, 20, 30, 40, 50, 60];

// continue y break aplican para while/for/do-while/for-in/for-of
for (let i = 0; i < numeros.length; i++) {

  debugger
  /*if (numeros[i] >= 40) {
    break; // rompe la ejecucion de un ciclo
  }*/
  if (numeros[i] === 40) {
    continue; // saltar el codigo que aparece despues e irse a la sig iteracion
  }
  console.log(numeros[i]);
  
}

// break y continue no se pueden usar con map y forEach
numeros.map(element => {
  if (element >= 40) {
    break; // rompe la ejecucion de un ciclo
  }
  console.log(element);
});

numeros.forEach(element => {
  if (element >= 40) {
    break; // rompe la ejecucion de un ciclo
  }
  console.log(element);
});