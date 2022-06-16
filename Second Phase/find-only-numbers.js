var FilterString = function (value) {
  console.log(value);
  let num = "";
  for (let i = 0; i < value.length; i++) {
    if (Number(value[i]) || Number(value[i]) === 0) {
      num += value[i];
    }
  }

  return Number(num);
};
console.log(FilterString("ab123kfjdsl4"));
