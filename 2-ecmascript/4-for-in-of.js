const array = [100, 90, 110, 101, 12, 70];
const student = { id: 1, name: 'jose', app: 'montoya' };

for (let i=0; i < array.length; i++) {
  const numero = array[i]; // iterador
  if (numero >= 100) {
    console.log(`numero: ${numero}`);
  }
}

// for of => arrays
for (const iterador of array) {
  if (iterador >= 100) {
    console.log(`numero: ${iterador}`);
  }
}

// for in => objects
for (const property in student) {
    console.log(`property: ${student[property]}`);
}