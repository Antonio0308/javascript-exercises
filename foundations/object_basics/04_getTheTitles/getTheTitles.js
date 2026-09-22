const getTheTitles = function (arr) {
  const arrLength = arr.length;
  const arrTitles = [];
  for (let i = 0; i < arrLength; i++) {
    arrTitles.push(arr[i].title);
  }
  return arrTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
