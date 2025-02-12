const add = (a,b) => {
	return a + b;
};

const subtract = (a,b) => {
	return a - b;
};

const sum = (array = []) => {
	return array.reduce((total, num)=>total+num,0);
};

const multiply = (array = []) => {
	return array.reduce((total, num)=>total*num,1);
};

const power = (a,b) => {
	return Math.pow(a, b);
};

const factorial = (num) => {
  let total = 1;
  for (let i = 1; i<=num; i++) {
    total = total*i;
  }

  return total;
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
