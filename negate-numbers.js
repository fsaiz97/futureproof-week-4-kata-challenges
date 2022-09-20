function makeNegative(num){
    if (num == null || num == undefined) {
        throw "Function must have an input"
    } else if (typeof num !== 'number'){
        throw "Must be an integer"
    }
    
    if (num > 0){
        return -num
    } else if (num < 0){
        return num
    } else if (num === 0){
        return num
    } else if (num === -0){
        return num
    }
}

module.exports = { makeNegative }


