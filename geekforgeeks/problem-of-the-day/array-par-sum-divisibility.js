//{ Driver Code Starts
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString = inputString.trim().split("\n");
    main();
});

function readLine() { return inputString.shift(); }

function main() {
    let t = parseInt(readLine().trim());
    for (let i = 0; i < t; i++) {
        let arr = readLine().trim().split(" ").map(Number);
        let k = parseInt(readLine().trim());

        let solution = new Solution();
        let ans = solution.canPair(arr, k);
        console.log(ans ? "true" : "false");
    }
}

// } Driver Code Ends


class Solution {
    canPair(arr, k) {
        // code here.
        const n = arr.length;
        if(n%2 !=0) return false;
        const remainderCount = Array(k).fill(0);
        
        for(const num of arr){
            let remainder = num %k;
            //dealing with negative remainder;
            remainder = (remainder + k)%k;
            
            remainderCount[remainder] +=1;
        }
        console.log("remainder count", remainderCount)
        for(let remainder=0; remainder<k; remainder++){
            
            if(remainder==0){
                if(remainderCount[remainder]%2 !=0) return false;
            }
            // if(remainder * 2 == k){
            //     if(remainderCount[remainder] % 2 !=0) return false;
            // }
            
            else if (remainderCount[remainder] != remainderCount[k - remainder]){
               
                return false;
            }
        }
        
        return true;
    }
}
