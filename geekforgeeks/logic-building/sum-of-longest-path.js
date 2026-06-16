class Node {
    constructor(x) {
        this.data = x;
        this.left = null;
        this.right = null;
    }
}

function sumOfLongRootToLeafPath(root) {
    let maxLength = 0;
    let maxSum = 0;

    const queque = [[root, root.data, 1]];

    while(queque.length){

        const [node, sum, length] = queque.shift();

        //this is a left node;
        if(!node.left && !node.right){
            // check if length of path of the current leaf node is greater than maxLength
            if(length > maxLength){
                maxLength = length;
                maxSum = sum;

            }else if(maxLength== length && sum > maxSum){
                //if the length is equal to maxlength and sum greater than maxSum update sum;
                maxSum = sum;
            }
        }

        if(node.left){
            queque.push([node.left, sum + node.left.data, length + 1])
        }
        if(node.right){
            queque.push([node.right, sum + node.right.data, length + 1])
        }

        
    }

    return maxSum;
}

const root = new Node(4);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(3);

console.log(sumOfLongRootToLeafPath(root));


function sumOfLongRootToLeaf(root, sum, length, maxLen, maxSum){
    if(!root){
        if(length > maxLen[0]){
            maxLen[0] = length;
            maxSum[0] = sum
        }

        // If the lengths are equal, check if the current sum is 
        // greater and update maxSum if necessary
        else if (length === maxLen[0] && sum > maxSum[0]) {
            maxSum[0] = sum;
        }
        return;
    }

    sumOfLongRootToLeaf(root.left,  sum + root.data, length+1, maxLen, maxSum)
    sumOfLongRootToLeaf(root.right, sum + root.data, length+1, maxLen, maxSum)
}


function sumOfLongRootToLeafPathRecursive(root) {

    // Base case: if the tree is empty
    if (!root) return 0;

    // Initializing the variables to store the
    // maximum length and sum
    let maxSum = [-Infinity];
    let maxLen = [0];

    // Calling the utility function
    sumOfRootToLeaf(root, 0, 0, maxLen, maxSum);

    // Returning the maximum sum
    return maxSum[0];
}