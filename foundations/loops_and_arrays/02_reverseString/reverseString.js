const reverseString = function (str) {
  const strLength = str.length - 1;
  let strReverse = "";
  for (let i = strLength; i >= 0; i--) {
    strReverse += str[i];
  }
  return strReverse;
};

// Do not edit below this line
module.exports = reverseString;
