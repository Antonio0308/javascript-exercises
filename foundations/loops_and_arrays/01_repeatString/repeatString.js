const repeatString = function (str, num) {
  let strRepeat = "";
  if (num < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < num; i++) {
      strRepeat += str;
    }
  }

  return strRepeat;
};

// Do not edit below this line
module.exports = repeatString;
