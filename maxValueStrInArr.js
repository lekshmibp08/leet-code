/* Q. 2496
The value of an alphanumeric string can be defined as:

The numeric representation of the string in base 10, if it comprises of digits only.
The length of the string, otherwise.
Given an array strs of alphanumeric strings, return the maximum value of any string in strs.

 

Example 1:

Input: strs = ["alic3","bob","3","4","00000"]
Output: 5
Explanation: 
- "alic3" consists of both letters and digits, so its value is its length, i.e. 5.
- "bob" consists only of letters, so its value is also its length, i.e. 3.
- "3" consists only of digits, so its value is its numeric equivalent, i.e. 3.
- "4" also consists only of digits, so its value is 4.
- "00000" consists only of digits, so its value is 0.
Hence, the maximum value is 5, of "alic3".
*/
var maximumValue = function(strs) {
    let value;
    let maxValue = 0;
    for(let str of strs) {
        if(/^\d+$/.test(str)) {
            value = parseInt(str)
        } else {
            value = str.length
        }
        maxValue = Math.max(maxValue, value);
    }
    return maxValue
};