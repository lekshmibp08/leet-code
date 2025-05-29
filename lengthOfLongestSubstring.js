/* Given a string s, find the length of the longest substring without duplicate characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring. */

var lengthOfLongestSubstring = function(s) {
    let currSubstring = '';
    let maxSubstring = '';
    for(let i = 0; i < s.length; i++) {
        let index = currSubstring.indexOf(s[i]);
        if(index !== -1) {
            console.log(currSubstring);
            currSubstring = currSubstring.slice(index+1);
            console.log(currSubstring);
            
        }
        currSubstring += s[i];
        if(maxSubstring.length < currSubstring.length) {
            maxSubstring = currSubstring;
        }
    }
    return maxSubstring.length
};

console.log(lengthOfLongestSubstring('pwwkew'));
