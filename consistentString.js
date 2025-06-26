/* Q. 1684
You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.

Example 1:
Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2

Example 2:
Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7

Example 3:
Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
Output: 4
 */

var countConsistentStrings = function (allowed, words) {
    let count = 0
    let table = {}
    for (let i = 0; i < allowed.length; i++) {
        table[allowed[i]] = true
    }
    loop1: for (let i = 0; i < words.length; i++) {
        let word = words[i]
        for (let j = 0; j < word.length; j++) {
            if (!(word[j] in table)) {
                continue loop1
            }
        }
        count++
    }
    return count
};