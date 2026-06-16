function productExceptSelf(nums) {
  const result = [];
  let prefix = 1;
  let postfix = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    postfix *= nums[i + 1];
    result[i] *= postfix;
  }

  return result;
}

//division
function productExceptSelfDivision(nums) {
  let prod = 1;
  zeroCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      prod *= nums[i];
    } else {
      zeroCount++;
    }
  }

  if (zeroCount > 1) {
    return Array(nums.length).fill(0);
  }

  const res = new Array({ length: nums.length });

  for (let i = 0; i < nums.length; i++) {
    if (zeroCount > 0) {
      res[i] = nums[i] === 0 ? prod : 0;
    } else {
      res[i] = prod / nums[i];
    }
  }

  return res;
}

productExceptSelf([1, 2, 3, 4]);
