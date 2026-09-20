const fibonacci = function (num) {
  if (isNaN(num) || num < 0) {
    return "OOPS";
  } else if (Number(num) === 0) {
    return 0;
  }
  let fibonacci = [1];
  let i = 1;
  while (i < num) {
    if (fibonacci.length === 1) {
      fibonacci.push(i);
    } else {
      const indexLastElement1 = fibonacci.length - 1;
      const indexLastElement2 = fibonacci.length - 2;
      const newElement =
        fibonacci[indexLastElement1] + fibonacci[indexLastElement2];
      fibonacci.push(newElement);
    }
    i++;
  }
  const lastNumFibonacci = fibonacci.length - 1;
  return fibonacci[lastNumFibonacci];
};

// Do not edit below this line
module.exports = fibonacci;
