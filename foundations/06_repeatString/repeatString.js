const repeatString = function(arg , n) {
    let i=0;
    let ans="";
    if(n<0){
        return "ERROR";
    }
    for(i=0;i<n;i++){
        ans+=arg;
    }
    return ans;

};

// Do not edit below this line
module.exports = repeatString;
