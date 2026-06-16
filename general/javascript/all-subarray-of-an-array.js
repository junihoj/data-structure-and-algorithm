// JavaScript Example
function getAllSubsets(arr) {
  let subsets = [[]];
  for (let num of arr) {
    let n = subsets.length;
    for (let i = 0; i < n; i++) {
      subsets.push([...subsets[i], num]);
    }
  }
  return subsets;
}

// // # Python Example
// def subsets(nums):
//     res = []
//     def backtrack(index, current_subset):
//         if index == len(nums):
//             res.append(list(current_subset))
//             return
        
//         # Decision: Include nums[index]
//         current_subset.append(nums[index])
//         backtrack(index + 1, current_subset)
        
//         # Decision: Exclude nums[index] (backtrack)
//         current_subset.pop()
//         backtrack(index + 1, current_subset)

//     backtrack(0, [])
//     return res


/* =============== bit manupulation =============== */

// # Python Example
// def subsets(nums):
//     res = []
//     def backtrack(index, current_subset):
//         if index == len(nums):
//             res.append(list(current_subset))
//             return
        
//         # Decision: Include nums[index]
//         current_subset.append(nums[index])
//         backtrack(index + 1, current_subset)
        
//         # Decision: Exclude nums[index] (backtrack)
//         current_subset.pop()
//         backtrack(index + 1, current_subset)

//     backtrack(0, [])
//     return res



/* ================= WITHOUT DUPLICATE ========================= */

// def subsetsWithDup(nums):
//     nums.sort()  # Step 1: Sort to group duplicates
//     res = []
    
//     def backtrack(start, path):
//         res.append(list(path))
//         for i in range(start, len(nums)):
//             # Step 2: If the current number is the same as the previous 
//             # and not the first in this loop, skip it.
//             if i > start and nums[i] == nums[i-1]:
//                 continue
            
//             path.append(nums[i])
//             backtrack(i + 1, path)
//             path.pop()

//     backtrack(0, [])
//     return res


// function subsetsWithDup(nums) {
//   nums.sort((a, b) => a - b);
//   let res = [[]];
//   let prevEnd = 0;

//   for (let i = 0; i < nums.length; i++) {
//     // Start from 0 unless this is a duplicate of the previous element
//     let start = i > 0 && nums[i] === nums[i - 1] ? prevEnd : 0;
//     prevEnd = res.length; // Mark where the 'new' subsets started

//     for (let j = start; j < prevEnd; j++) {
//       res.push([...res[j], nums[i]]);
//     }
//   }
//   return res;
// }


// from itertools import combinations

// def get_all_subsets(nums):
//     return [list(subset) for i in range(len(nums) + 1) 
//             for subset in combinations(nums, i)]