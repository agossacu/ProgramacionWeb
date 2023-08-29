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
