const removeFromArray = function(a,t) {
    for (let j = 0; j < t.length; j++) {

        for (let i = a.length - 1; i >= 0; i--) {
            if (a[i] === t[j]) {
                a.splice(i, 1);
            }
        }

    }

    return a;
};
// Do not edit below this line
module.exports = removeFromArray;
