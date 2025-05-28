/* You are given an array made only of 0s and 1s.
You need to count how many subarrays (contiguous parts of the array) have equal numbers of 0s and 1s.
Input: [0, 1, 0, 1]
The valid subarrays with equal 0s and 1s are:
	•	[0, 1] - index position(0,1)
	•	[1, 0] - index position (1,2)
	•	[0, 1, 0, 1] - index position (0,1,2,3)
	•	[0, 1] (the second one) -index position (2, 3)
So, the output = 4*/

function countEqualZeroOneSubarrays(arr) {
  const map = new Map();
  let prefixSum = 0;
  let count = 0;

  map.set(0, 1);

  for (let num of arr) {
    prefixSum += (num === 0 ? -1 : 1);

    if (map.has(prefixSum)) {
      count += map.get(prefixSum);
    }

    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }

  return count;
}

// Example usage:
const arr = [0, 1, 0, 0, 0, 1];
console.log(countEqualZeroOneSubarrays(arr)); // Output: 4
