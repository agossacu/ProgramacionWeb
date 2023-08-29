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
/*ACTIVIDAD 6
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
*/ /* ACTIVIDAD 1 OBJETOS

function createObject(name, subs) {
  const persona = {
    name,
    subs,
    hash: name.length * subs,
    walk: function () {
      return `El canal de ${name} tiene ${subs} subscriptores.`;
    },
  };
  return persona;
}
let botella = createObject("fabry", 2929);
console.log(botella.walk());
*/
/*ACTIVIDAD 2 OBJETO

1)se muestra 70 180, ya que son los valores que se pidieron en el console.log
2)pw.js:64 Uncaught ReferenceError: age is not defined
    at pw.js:64:13
  Da error porque la referencia de eso no existe, referencia son las variables,
  deberia decir console.log(personAge)
3)  */
