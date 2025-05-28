const findMaxLength = (nums) => {
    let map = new Map();
    map.set(0, -1);
    let sum = 0;
    let maxLength = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i] === 0 ? -1 : 1;
        
        if(map.has(sum)) {
            maxLength = Math.max(maxLength, i-map.get(sum));
        } else {
            map.set(sum, i)
        }
    }
    console.log(map);
    
    return maxLength
}

nums = [0, 1, 1, 1, 1, 1, 0, 0, 0]
console.log(findMaxLength(nums));   // 6

// Map(6) { 0 => -1, -1 => 0, 1 => 2, 2 => 3, 3 => 4, 4 => 5 }


// we store sum and index in the map
// if same sum repeats it means that there is a valid sub array b/w 
// current index and the index corresponding to the sum
// And the length of that sub array will be the difference b/w the indices