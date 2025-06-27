/* Q. 792
Given a string s and an array of strings words, return the number of words[i] that is a subsequence of s.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters. 

Example 1:
Input: s = "abcde", words = ["a","bb","acd","ace"]
Output: 3

Example 2:
Input: s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]
Output: 2
*/

var numMatchingSubseq = function(s, words) {
    const isSubsequence = (s, word) => {
        let i = 0, j = 0;
        while(i < s.length && j < word.length) {
            if(s[i] === word[j]) {
                i++;
            }
            j++;
        }
        return i === s.length;
    }
    let count = 0;
    for(let word of words) {
        if(isSubsequence(word, s)) {
            count++
        }
    }
    return count;
    
};