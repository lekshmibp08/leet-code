/* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. */

function threeSum(nums) {
    const res = [];
    nums.sort((a, b) => a - b); // Step 1: Sort the array

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate 'i'

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const total = nums[i] + nums[left] + nums[right];

            if (total < 0) {
                left++;
            } else if (total > 0) {
                right--;
            } else {
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                // Skip duplicates for 'left' and 'right'
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            }
        }
    }

    return res;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// Output: [[-1, -1, 2], [-1, 0, 1]]
