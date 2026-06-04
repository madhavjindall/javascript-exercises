const fibonacci = function(a) {
    
    let first=1;
    let second =1;
    if(a<0){
        return "OOPS";
    }
    if(a==0){
        return 0;
    }
    if(a==1){
        return first;
    }
    if(a==2){
        return second;
    }
    let sum=0;

    if(a>2){
    for(let i=3;i<=a;i++){
        sum=first+second;
        first=second;
        second =sum;
        }
    }      
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
