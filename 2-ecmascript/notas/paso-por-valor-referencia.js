// variables complejas => funcionan paso por referencia
let student = { id: 1, name: 'jose montoya' };
let student2 = student;
let student3 = Object.assign({}, student);
let student4 = { ...student };
console.log('student', student);
student.name = 'juanito lopez';
console.log('student', student);
console.log('student2', student2);
console.log('student3', student3);
console.log('student4', student4);

let array = [100, 90, 110, 101, 12, 70];
let newArray = array;
let newArray2 = [ ...array ];
array.push(10000);
console.log(array);
console.log(newArray);
console.log(newArray2);