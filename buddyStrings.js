/* Q. 859
Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

Example 1:
Input: s = "ab", goal = "ba"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal. 
*/
var buddyStrings = function(s, goal) {
    if (s.length !== goal.length) return false;

    if (s === goal) {
        const set = new Set(s);
        return set.size < s.length; 
    }

    const diffs = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            diffs.push(i);
        }
    }

    return (
        diffs.length === 2 &&
        s[diffs[0]] === goal[diffs[1]] &&
        s[diffs[1]] === goal[diffs[0]]
    );    
};