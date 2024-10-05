// function arrayToBst(nums){
//     //get the middle number of the array
//     let mid = Math.floor(nums.length/2);
//         if(nums.length < 1){
//             return null;
//         }else if(nums.length >1){
//             return{
//                 root:nums[mid],
//                 left: sortedArrayToBST(nums.slice(0, mid)),
//                 right: sortedArrayToBST(nums.slice(mid+1, nums.length))
//             }
//         }else{
//             return{
//                 root:nums[mid],
//                 left: null,
//                 right: null
//             }
//         }
// }

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    sortedArrayToBST(nums) {
        // code here
        //get the middle number of the array
        if (!nums.length) return null;
    
        const mid = Math.floor(nums.length / 2);
        const root = new Node(nums[mid]);
        
        // subtrees are BSTs as well
        root.left = this.sortedArrayToBST(nums.slice(0, mid));
        root.right = this.sortedArrayToBST(nums.slice(mid + 1));
        
        return root;
    }
    
    
}


//
// The Binary tree will be built with the Tree Node representation (Linked representation)
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// Convert a given array of data values into a binary tree representation
// This assumes a 0 index array
// So for an index i, the Left Child would be at 2(i) + 1
// The right Child will be at 2(i) + 2
// The parent for any ith node is Math.Floor((i -1) / 2)
// Since the binary tree is a complete binary tree, its filled from left to right
// and empty nodes are indicated by a NULL.


function convertArrayToBinaryTree(arr) {
    if (!arr.length) {
        return null;
    }
    
    let index = 0;
    const root = new TreeNode(arr[0]);
    const q = [root];

    let deqdElem = null;
    let leftChildIndex = -1;
    let rightChildIndex = -1;
    
    while (index < (arr.length)) {
        deqdElem = q.shift();
        
        leftChildIndex = (2 * index) + 1;
        rightChildIndex = (2 * index) + 2;
        
        // insert only if the index is not out of bounds
        // and if the element in the index is not null.
        // Don't create NULL treeNodes, instead set the parent as NULL.
        // Its also possible that since the Array represents a complete binary tree
        // child nodes would've been left empty (as they would have been filled left to right)
        if ((leftChildIndex < arr.length) && arr[leftChildIndex] !== null) {
            deqdElem.left = new TreeNode(arr[leftChildIndex]);
            q.push(deqdElem.left);
        } else {
            if (leftChildIndex < arr.length) {
                q.push(null);   
            }
        }
        
        // insert only if the index is not out of bounds
        // and if the element in the index is not null.
        // Don't create NULL treeNodes, instead set the parent as NULL.
        // Its also possible that since the Array represents a complete binary tree
        // child nodes would've been left empty (as they would have been filled left to right)
        if ((rightChildIndex < arr.length) && arr[rightChildIndex] !== null) {
            deqdElem.right = new TreeNode(arr[rightChildIndex]);
            q.push(deqdElem.right);
        } else {
            if (rightChildIndex < arr.length) {
                q.push(null);
            }
        }
        
        ++index;
    }
    
    return root;
}

const a = [3, null, 4, null, null, null, 5, null, null, null, null, null, null, null, 6]

console.log(JSON.stringify(convertArrayToBinaryTree(a)));