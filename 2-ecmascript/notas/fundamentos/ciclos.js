var arreglo = [19, 22, 53, 64, 33, 66];
/*
  Imprimir cada elemento del arreglo sin hacer cada
  console.log de 1 en 1
*/
/*
  valordeInicio
  while(condicion) {
    // sentences
    razonCambio
  }
*/
let position = 0;
console.log('con while');
while (position < arreglo.length) {
    console.log(arreglo[position]);
    position = position + 1;
}

/*
  for(valordeInicio; condicion; razonCambio) {
    // sentences
  }
  1. valordeInicio
  2. Repetir condicion y sentences
  3. Razon de cambio y repetir paso 2
*/
console.log('con for');
for (let position = 0; position < arreglo.length; position++) {
    console.log(arreglo[position]);
}