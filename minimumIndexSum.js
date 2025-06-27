/* Q. 599
Given two arrays of strings list1 and list2, find the common strings with the least index sum.

A common string is a string that appeared in both list1 and list2.

A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.

Return all the common strings with the least index sum. Return the answer in any order.

Input: list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
Output: ["sad","happy"]
Explanation: There are three common strings:
"happy" with index sum = (0 + 1) = 1.
"sad" with index sum = (1 + 0) = 1.
"good" with index sum = (2 + 2) = 4.
The strings with the least index sum are "sad" and "happy".
*/
var findRestaurant = function(list1, list2) {
    const map = new Map();
    const result = [];
    let minSum = Infinity;

    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }

    for (let j = 0; j < list2.length; j++) {
        const word = list2[j];

        if (map.has(word)) {
            const sum = j + map.get(word);

            if (sum < minSum) {
                result.length = 0; 
                result.push(word);
                minSum = sum;
            } else if (sum === minSum) {
                result.push(word);
            }
        }
    }

    return result;    
};