saludar();
// hoisting: elevar las funciones al principio del codigo
console.log(suma(10, 20));
function suma(num1, num2) {
  return num1 + num2;
}


algo();
function algo() {
    console.log('algo....');
    algo2()
}
function algo2() {
  console.log('algo2....');
}

var sumaCuadrada = suma(1,2)



function saludar(){
  console.log('Holiwis')
}