const array = [100, 90, 110, 101, 12, 70];
const student = { id: 1, name: 'jose', app: 'montoya' };

for (let i=0; i < 4; i++) {
  const numero = array[i]; // iterador
  if (numero >= 100) {
    console.log(`numero: ${numero}`);
  }
}

// for of => arrays
for (const elemnto of array) {
  if (elemnto >= 100) {
    console.log(`numero: ${elemnto}`);
  }
}

// for in => objects
for (const property in student) {
    console.log(`property: ${student[property]}`);
}