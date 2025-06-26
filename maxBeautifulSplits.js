/* a string to be 'beautiful' if and only if the number of 0's and 1's in the string are equal.*/

/*
split the string into substrings such that each substring is beautiful. 
find the maximum number of beautiful strings that can split the string into? 
If it is not possible to split the string in such a way that all strings 
are beautiful, return -1.
*/

function maxBeautifulSplits(str) {
    let count = 0;
    let sum = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i] === '1') sum++;
        if(str[i] === '0') sum--;

        if(sum === 0) count++;
    }

    if(sum === 0){
        return count;
    } else {
        return -1;
    }
}

console.log(maxBeautifulSplits('101001'));
console.log(maxBeautifulSplits('1100001'));
