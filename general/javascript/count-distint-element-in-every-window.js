function countDistinct(arr, k) {
    // code here
    // let res = [];
    // for(let winSize=0; winSize<k; winSize++){
       
    //     let start = winSize;
    //     let end = start + k;
        
    //     let sub = arr.slice(start, end);
    //     let arrSet = new Set(sub);
    //     res.push(arrSet.size);
        
    // }
    
    // return res;
    
    let n= arr.length;
    if(k>n) return [];
    
    let res = [];
    let freq_map = {};
    for(let i=0; i<k; i++){
        freq_map[arr[i]] = (freq_map[arr[i]] ?? 0) + 1 
    }
   
    res.push(Object.keys(freq_map).length)
   
    for(let i=k; i<n; i++){
        freq_map[arr[i]] = (freq_map[arr[i]] ?? 0) + 1
        freq_map[arr[i-k]] -=1;
        if(freq_map[arr[i-k]]==0){
            delete freq_map[arr[i-k]]
        }
        
        res.push(Object.keys(freq_map).length)
    }
    
    return res;


}





const solutionTwo = (arr, k)=> {
    // code here
    let res = [];
    let start = 0;
    let end = k;
    let n= arr.length;
    let v = new Set(arr.slice(start, end)).size;
    res.push(v)
    for(let i=k; i<n; i++){
       
         start = start + 1;
         end = start + k;
        
        let sub = arr.slice(start, end);
        let arrSet = new Set(sub);
        res.push(arrSet.size);
        
    }
    
    return res;

}