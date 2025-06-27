/* Q. 796
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.
 
Example 1:
Input: s = "abcde", goal = "cdeab"
Output: true

Example 2:
Input: s = "abcde", goal = "abced"
Output: false
*/
var rotateString = function(s, goal) {
    if (s.length !== goal.length) return false;
    return (s + s).includes(goal);    
};