function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function factorial(a) {
  if (a === 1) return 1;
  return multiply (a * factorial(a -1));
} 

exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
exports.factorial = factorial;