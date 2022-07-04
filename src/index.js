module.exports = function reverse (n) {
    if (n < 0) n = -n;
    
    let str = String(n);
    let length = str.length;
    let tempStr = '';

    for (let i = 0; i < length; i++){
    tempStr = str[i] + tempStr;
    console.log(str[i]);
    }
    
    return +tempStr;
}
