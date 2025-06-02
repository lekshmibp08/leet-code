/* Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Input: nums = [1], k = 1
Output: [1] */

var topKFrequent = function(nums, k) {
    let map = new Map();
    let result = [];
    for(let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    let sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
    for(let i = 0; i < k; i++) {
        result.push(sorted[i][0]);
    }
    return result
};

const nums = [1,1,1,2,2,3], k = 2

console.log(topKFrequent(nums, k));     // [ 1, 2 ]

