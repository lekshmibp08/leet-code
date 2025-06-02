/* 2273. Find Resultant Array After Removing Anagrams */

var removeAnagrams = function(words) {
    const sorter = (word) => word.split("").sort().join("");

    const res = [words[0]];

    for (let i = 1; i < words.length; i++) {
        if (sorter(words[i]) !== sorter(words[i - 1])) {
            res.push(words[i]);
        }
    }

    return res;
};


/*

var removeAnagrams = function(words) {
    let result = [];
    for(let word of words) {
        let sorted = sortWord(word);
        let prev = result.length > 0 ? sortWord(result[result.length-1]) : null;
        if(result.length === 0 || sorted !== prev) {
            result.push(word);
        }
    }
    return result;
};
function sortWord(word) {
    return word.split('').sort().join('');
}

*/