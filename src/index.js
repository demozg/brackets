module.exports = function check(str, bracketsConfig) {
    let brackets = bracketsConfig.join('').replace(/,/g, '');
    let arr = [];
    for (let bracket of str) {
        let bracketsNumber = brackets.indexOf(bracket)
        if (bracketsNumber % 2 === 0) {              
            if (bracket === brackets[bracketsNumber + 1] && arr[arr.length - 1] === bracketsNumber){
                arr.pop();
            } else if (bracket === brackets[bracketsNumber + 1] && arr[arr.length - 1] !== bracketsNumber) {
                arr.push(bracketsNumber)
            }
            else{
                arr.push(bracketsNumber)
            }
        } 
        else {
            if (arr.pop() !== bracketsNumber - 1){
                return false;
            }
        }
    }
    return arr.length === 0
}