var containsDuplicate = function (nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  }

  return false;
};

// Input: nums = [1,2,3,4]
// Output: false

const containsDuplicateHashTable = (arr) => {
  const hashTable = {};
  for (let i = 0; i < arr.length; i++) {
    if (hashTable[arr[i]] != undefined) {
      return true;
    }
    hashTable[arr[i]] = i;
  }

  return false;
};

console.log(containsDuplicateHashTable([1, 3, 4, 1]));
