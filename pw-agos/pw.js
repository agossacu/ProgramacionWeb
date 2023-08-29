/* ACTIVIDAD 5 
let numeros = [-5, -9, -28, -17, -6];

function sortAbsoluteNumbers(copiaNumeros) {
  const arr = [];
  for (let num of copiaNumeros) {
    const number = Math.abs(num);
    arr.push(number);
  }
  return arr.sort((a, b) => a - b);
}
console.log(sortAbsoluteNumbers(numeros));
*/
//ACTIVIDAD 6
words = [
  "hola",
  "tres",
  "uno",
  "Universidad",
  "de",
  "Buenos Aires",
  "pepito",
  "celular",
];
word = "pepito";
function buscaPalabras(words, word) {
  let nom = [];
  let indice = words.indexOf(word);
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > indice) {
      nom.push(words[i]);
    }
  }
  console.log(nom);
}
buscaPalabras(words, word);
