//ACTIVIDAD 1

/*let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let suma = 0;
function sumarPares(numero) {
  for (let i = 0; i < numero.length; i++) {
    if (numero[i] % 2 === 0) {
      suma = suma + numero[i];
    }
    //console.log(suma); // imprime el elemento en la posición i
  }
  console.log(suma);
}
sumarPares(numeros);
*/

//ACTIVIDAD 2

const arr = ["casa", "pelota", "celula"];

const cumple = arr.every((letter) => letter.endsWith("a"));

console.log(cumple);
