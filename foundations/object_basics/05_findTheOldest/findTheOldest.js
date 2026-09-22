const findTheOldest = function (people) {
  const date = new Date();
  const newArr = people.map((item) => {
    if (item.yearOfBirth && item.yearOfDeath) {
      return {
        name: item.name,
        yearOld: item.yearOfDeath - item.yearOfBirth,
      };
    } else {
      return {
        name: item.name,
        yearOld: date.getFullYear() - item.yearOfBirth,
      };
    }
  });
  const newArrSorts = newArr.toSorted((a, b) => b.yearOld - a.yearOld);
  return newArrSorts[0];
};

// Do not edit below this line
module.exports = findTheOldest;
