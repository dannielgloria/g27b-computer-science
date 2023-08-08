var arreglo = [19, 22, 53, 64, 33, 66, 90, 77, 22, 66, 12];

/**
Imprimir los primero 3 elementos de arreglo

console.log('Elemento hasta position 2')
for (let position = 0; position < arreglo.length; position++) {
    if (position > 2) {
        break;
    }
    console.log(arreglo[position]);
}

/**
Imprimir todos los elementos excepto el 66
*/
console.log('Todos los elementos excepto el 33')
for (let position = 0; position < arreglo.length; position++) {
    if (arreglo[position] == 33) {
        continue;
    }
    console.log(arreglo[position]);
}