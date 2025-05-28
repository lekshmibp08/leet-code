/* Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice. */

const twoSum = (nums, target) => {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i];
        if(map.has(compliment)) {
            return [map.get(compliment), i];
        }
        map.set(nums[i], i);
    }
}

const nums = [2,7,11,15], target = 9;
console.log(twoSum(nums, target));  // [0, 1]
