const removeFromArray = function(array, ...toRmv) {
    const sequenceNew = array.filter(item => !toRmv.includes(item));
    return sequenceNew;
};

// Do not edit below this line
module.exports = removeFromArray;
