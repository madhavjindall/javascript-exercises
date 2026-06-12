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
    let arr=[];
    for(let i=Math.min(a,b);i<=Math.max(a,b);i++){
        arr.push(i);
    }
    let sum =arr.reduce((acc,n)=>acc+n);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
