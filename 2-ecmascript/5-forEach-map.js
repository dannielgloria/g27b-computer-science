const array = [100, 90, 110, 101, 12, 70];

// console.log(`Ciclo ForEach`);
// array.forEach(function(element, index) { // funciones anonimas
//    console.log(`arr[${index}] = ${element}`); // arr[1] = 100x
// });

// console.log(`Ciclo Map`);
// array.map(function(element, index) { // funciones anonimas
//    console.log(`arr[${index}] = ${element}`); // arr[1] = 100
// });

// console.log(`Ciclo ForEach`);
// array.forEach((element, index) => { // funciones flecha
//    console.log(`arr[${index}] = ${element}`); // arr[1] = 100x
// });

// console.log(`Ciclo Map`);
// array.map((element, index) => { // funciones flecha
//    console.log(`arr[${index}] = ${element}`); // arr[1] = 100
// });

const array = [100, 90, 110, 101, 12, 70];
console.log(`Ciclo ForEach`);
const resultadoForEach = array.forEach((element) => {
   element = element + 5
});
console.log(`resultadoForEach: ${resultadoForEach}`);

console.log(`Ciclo Map`);
const resultadoMap = array.map((element) => {
   element = element + 5
});
console.log(`resultadoMap: ${resultadoMap}`);
