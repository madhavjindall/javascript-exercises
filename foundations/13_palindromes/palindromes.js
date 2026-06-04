const palindromes = function (str) {
    str = str.toLowerCase();

    let cleaned = "";

    for (let i = 0; i < str.length; i++) {
        const ch = str[i];

        if (
            (ch >= 'a' && ch <= 'z') ||
            (ch >= '0' && ch <= '9')
        ) {
            cleaned += ch;
        }
    }

    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

module.exports = palindromes;

// Do not edit below this line
module.exports = palindromes;
