/* Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]] */


var groupAnagrams = function(strs) {
    let map = new Map();
    for(let word of strs) {
        let sorted = word.split('').sort().join('');
        if(!map.has(sorted)) {
            map.set(sorted, []);
        }
        map.get(sorted).push(word);
    }
    return Array.from(map.values());
};

const strs = ["eat","tea","tan","ate","nat","bat"];

console.log(groupAnagrams(strs));

// [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]