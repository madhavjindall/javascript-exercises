const add = function(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "ERROR";
  }
  return a + b;
};

const subtract = function(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "ERROR";
  }
  return a - b;
};

const sum = function(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "ERROR";
    }
    total += arr[i];
  }

  return total;
};

const multiply = function(arr) {
  let total=1;
   for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "ERROR";
    }
    total *= arr[i];
  }
  return total;
  
};

const power = function(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "ERROR";
  }
  return Math.pow(a, b);
};

const factorial = function(a) {
  if (typeof a !== "number" || a < 0) {
    return "ERROR";
  }

  let ans = 1;

  for (let i = 1; i <= a; i++) {
    ans *= i;
  }

  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
