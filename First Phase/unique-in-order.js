var uniqueInOrder = function (iterable) {
  if (iterable.length === 0) {
    return [];
  }
  finalArray = [iterable[0]];
  for (let i = 1; i < iterable.length; i++) {
    presentCharacter = iterable[i];
    prevCharacter = iterable[i - 1];
    if (presentCharacter !== prevCharacter) {
      finalArray.push(iterable[i]);
    }
  }

  return finalArray;
};
console.log(uniqueInOrder([]));
