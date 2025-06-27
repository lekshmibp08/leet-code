/* Q. 917
Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

Example 1:
Input: s = "ab-cd"
Output: "dc-ba"

Example 2:
Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
*/

var reverseOnlyLetters = function(s) {
    const arr = s.split('');
    let left = 0;
    let right = arr.length - 1;

    const isLetter = (ch) => /[a-zA-Z]/.test(ch);

    while (left < right) {
        if (!isLetter(arr[left])) {
            left++;
        } else if (!isLetter(arr[right])) {
            right--;
        } else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr.join('');    
};
