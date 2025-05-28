function subarraySum(nums, k) {
  let count = 0;
  let sum = 0;
  const prefixSums = new Map();
  prefixSums.set(0, 1); // to handle cases where sum == k at some index

  for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    
    if (prefixSums.has(sum - k)) {
        count += prefixSums.get(sum - k);
    }
    
    prefixSums.set(sum, (prefixSums.get(sum) || 0) + 1);
  }
  console.log(prefixSums);
  

  return count;
}

console.log(subarraySum([1, 2, 3, 0, 1, 2], 3)); // 3

// Map(4) { 0 => 1, 1 => 1, 3 => 1, 6 => 2 }