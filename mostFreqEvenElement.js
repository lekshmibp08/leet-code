/*
Given an integer array nums, return the most frequent even element.

If there is a tie, return the smallest one. If there is no such element, return -1.
*/

var mostFrequentEven = function(nums) {
    let map = new Map();
    let mostFreq = 0;
    let result = Infinity;
    nums.forEach(num => {
        if(num % 2 === 0) {
            map.set(num, (map.get(num) || 0) + 1);
        }
    })
    if(map.size === 0) return -1;
    let sorted = Array.from(map.entries()).sort((a,b) => a[0] - b[0]);
    sorted.forEach((num) => {
        if(mostFreq < num[1]) {
            mostFreq = num[1];
            result = num[0];
        }
    })
    return result;
};

console.log(mostFrequentEven([0,1,2,2,4,4,1]));     // 2
console.log(mostFrequentEven([1,3,3,3,5,7]));       // -1
console.log(mostFrequentEven([22, 12, 6, 4]));      // 4
