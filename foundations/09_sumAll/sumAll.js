const sumAll = function(a,b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    if(min <0){
        return "ERROR";
    }
    if(max<0){
        return "ERROR";
    }
    if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    !Number.isInteger(a) ||
    !Number.isInteger(b) ||
    a < 0 ||
    b < 0
) {
    return "ERROR";
}
    let sum = 0;

    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
