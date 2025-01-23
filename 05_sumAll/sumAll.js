const sumAll = function(num1, num2) {

    if (num1 < 0 || num2 < 0 || Number.isInteger(num1) === false || Number.isInteger(num2) === false) {
        return 'ERROR';
    }
    let sum = 0;
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);

    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};
// Do not edit below this line
module.exports = sumAll;
