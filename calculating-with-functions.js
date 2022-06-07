function zero(param) {
  if (!param) return 0;
  else {
    return calculate(0, Number(param[1]), param[0]);
  }
}
function one(param) {
  if (!param) return 1;
  else {
    return calculate(1, Number(param[1]), param[0]);
  }
}
function two(param) {
  if (!param) return 2;
  else {
    return calculate(2, Number(param[1]), param[0]);
  }
}
function three(param) {
  if (!param) return 3;
  else {
    return calculate(3, Number(param[1]), param[0]);
  }
}
function four(param) {
  if (!param) return 4;
  else {
    return calculate(4, Number(param[1]), param[0]);
  }
}
function five(param) {
  if (!param) return 5;
  else {
    return calculate(5, Number(param[1]), param[0]);
  }
}
function six(param) {
  if (!param) return 6;
  else {
    return calculate(6, Number(param[1]), param[0]);
  }
}
function seven(param) {
  if (!param) return 7;
  else {
    return calculate(7, Number(param[1]), param[0]);
  }
}
function eight(param) {
  if (!param) return 8;
  else {
    return calculate(8, Number(param[1]), param[0]);
  }
}
function nine(param) {
  if (!param) return 9;
  else {
    return calculate(9, Number(param[1]), param[0]);
  }
}

function plus(param) {
  return "+" + param;
}
function minus(param) {
  return "-" + param;
}
function times(param) {
  return "*" + param;
}
function dividedBy(param) {
  return "/" + param;
}

function calculate(num1, num2, operation) {
  if (operation === "*") return num1 * num2;
  if (operation === "/") return Math.floor(num1 / num2);
  if (operation === "+") return num1 + num2;
  if (operation === "-") return num1 - num2;
}

console.log(seven(times(five())));
