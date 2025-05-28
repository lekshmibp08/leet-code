/* 
word = 'Google'  => true
word = 'leetcode'  => true
word = 'USA'  => true
word = 'FlaG'  => false
*/


const detectCapitalUse = function(word) {
    let lower = word.toLowerCase();
    let upper = word.toUpperCase();
    if(word === lower) return true;
    if(word === upper) return true;
    let total=0, lowerTotal=0;
    for(let i = 1; i < word.length; i++) {
        total += word.charCodeAt(i)
        lowerTotal += lower.charCodeAt(i)
    }
    
    if(total === lowerTotal) return true;
    return false;

};

console.log(detectCapitalUse('Leetcode'))   // true
console.log(detectCapitalUse('FlaG'))       // false

