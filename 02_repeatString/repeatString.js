const repeatString = function(string, num) {
    if (num < 0) return "ERROR"
    let multiWords = "";
    for(i = 0; i < num; i++){
        multiWords += string;
    }
   return multiWords;
};

// Do not edit below this line
module.exports = repeatString;
