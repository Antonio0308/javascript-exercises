const convertToCelsius = function (fahrenheit) {
  const temp = ((fahrenheit - 32) * 5) / 9;
  if (Number.isInteger(temp)) {
    return temp;
  } else {
    return Number(temp.toFixed(1));
  }
};

const convertToFahrenheit = function (celsius) {
  const temp = (celsius * 9) / 5 + 32;
  if (Number.isInteger(temp)) {
    return temp;
  } else {
    return Number(temp.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
