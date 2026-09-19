const palindromes = function (str) {
  let strArray = [];
  const listWords = [" ", ",", ".", "!"];
  const strLength = str.length - 1;
  for (let i = strLength; i >= 0; i--) {
    if (listWords.includes(str[i])) {
      continue;
    } else {
      strArray.push(str[i].toLowerCase());
    }
  }
  const palindrome = strArray.join("");
  const newStr = strArray.reverse().join("");
  if (palindrome === newStr) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
