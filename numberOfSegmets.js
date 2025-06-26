/* 403. Given a string s, return the number of segments in the string.

A segment is defined to be a contiguous sequence of non-space characters.

Example 1:

Input: s = "Hello, my name is John"
Output: 5
Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
Example 2:

Input: s = "Hello"
Output: 1
*/

var countSegments = function(s) {
    return s.split(' ').filter(segment => segment !== '').length;
};

const s1 = "Hello, my name is John"
const s2 = "Hello"
console.log(countSegments(s1));     // 5
console.log(countSegments(s2));     // 1
