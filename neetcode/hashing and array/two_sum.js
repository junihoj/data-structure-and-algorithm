/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        let diff = target - nums[i]
        let v = nums.indexOf(diff, i+1);
        if(v>=0 && v!=i){
            return [i, v]
        }
    }
    return -1;
};