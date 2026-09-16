const removeFromArray = function (arr, ...value) {
  return arr.filter((item) => !value.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
