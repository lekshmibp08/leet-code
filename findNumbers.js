/* Given an array nums of integers, return 
how many of them contain an even number of digits.*/

const findNumbers = function(nums) {
    let newArr = nums.filter((num) => String(num).length % 2 === 0);
    return newArr.length;
};

const nums = [12,345,2,6,7896];
console.log(findNumbers(nums));     //2
