const reverseString = function(arg) {
    let n=arg.length;
    let mid=n/2;
    let ans="";
    for(let i=0;i<n;i++){
        ans = ans + arg[n-1-i];
    }
    return ans;



};

// Do not edit below this line
module.exports = reverseString;
