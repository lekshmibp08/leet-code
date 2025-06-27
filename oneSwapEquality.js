/* Q. 1790
You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

Example 1:
Input: s1 = "bank", s2 = "kanb"
Output: true
Explanation: For example, swap the first character with the last character of s2 to make "bank".
*/

var areAlmostEqual = function(s1, s2) {
    if (s1 === s2) return true;

    const diffs = [];

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            diffs.push(i);
        }
    }

    return diffs.length === 2 &&
           s1[diffs[0]] === s2[diffs[1]] &&
           s1[diffs[1]] === s2[diffs[0]];    
};