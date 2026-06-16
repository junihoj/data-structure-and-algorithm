// Given an array of positive integers arr[] of size n, the task is to find second largest distinct element in the array.

// Note: If the second largest element does not exist, return -1.


function getSecondLargestSorting(arr) {
    let n = arr.length;
    
    // Sort the array in non-decreasing order
    arr.sort((a, b) => a - b);
  
    // start from second last element as last element is the largest
    for (let i = n - 2; i >= 0; i--) {
      
        // return the first element which is not equal to the 
        // largest element
        if (arr[i] !== arr[n - 1]) {
            return arr[i];
        }
    }
  
    // If no second largest element was found, return -1
    return -1;
}

// METHOD 2: 
function getSecondLargestOnePass(arr) {
    let n = arr.length;

    let largest = -1, secondLargest = -1;

    // Finding the largest element
    for (let i = 0; i < n; i++) {
        if (arr[i] > largest)
            largest = arr[i];
    }

    // Finding the second largest element
    for (let i = 0; i < n; i++) {
        
        // Update second largest if the current element is greater
        // than second largest and not equal to the largest
        if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}