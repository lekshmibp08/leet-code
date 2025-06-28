/* Q. 482

Example 1:
Input: s = "5F3Z-2e-9-w", k = 4
Output: "5F3Z-2E9W"

Explanation: The string s has been split into two parts, each part has 4 characters.
Note that the two extra dashes are not needed and can be removed.

Example 2:
Input: s = "2-5g-3-J", k = 2
Output: "2-5G-3J"

Explanation: The string s has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.
*/

var licenseKeyFormatting = function(s, k) {
    let cleaned = s.replace(/-/g, '').toUpperCase();
    let result = [];
    let count = 0;
    for(let i = cleaned.length - 1; i >= 0; i--) {
        result.push(cleaned[i]);
        count++;
        if(count === k && i !== 0) {
            result.push('-');
            count = 0;
        }
    }
    return result.reverse().join('')
};
