const palindromes = function (string) {
    let re = /[\W_]/g;
    const processedString = string.toLowerCase().replace(re, "");
    return processedString.split("").reverse().join("") == processedString;
};

// Do not edit below this line
module.exports = palindromes;
