const reverseString = function(string) {
    const wordArray = string.split("");
    const wordArrayReverse = wordArray.reverse();
    const wordReverse = wordArrayReverse.join("");

    return wordReverse;
};

// Do not edit below this line
module.exports = reverseString;
