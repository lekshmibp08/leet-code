/*
You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.

Input: nums = [1,2,3,2]
Output: 4

Input: nums = [1,1,1,1,1]
Output: 0

Input: nums = [1,2,3,4,5]
Output: 15
*/

const sumOfUnique = function(nums) {
    let map = new Map()
    let sum = 0;
    for(let num of nums) {
        map.set(num, (map.get(num) || 0)+1);
    }
    map.forEach((value, key) => {
        if(value === 1) {
            sum += key;
        }
    })
    return sum;

};

const nums = [1,2,3,4,5]
console.log(sumOfUnique(nums));
