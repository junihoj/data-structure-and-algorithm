var containsDuplicate = (nums) => {
    	let numsSet = new Set(nums)

	let isEqual = numsSet.size === nums.length
	return !isEqual
}

var containsDuplicate2 = (nums) => {
    	let numsSet = new Set();
	for(const num of nums){
		if(numsSet.has(num)) return true;
		numsSet.add(num)
	}
	return false;
}