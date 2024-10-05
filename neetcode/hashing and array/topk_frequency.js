var topKFrequent = function(nums, k) {
    let map = new Map()
      for(let i=0; i<nums.length; i++){
          map.set(nums[i], (map.get(nums[i]) || 0) + 1);
      }
  
      let sortedMap = [...map.entries()].sort((a,b)=>a[1] - b[1]>0? -1: 1)
      let mf=[];
      for(let j=0; j<k; j++){
          if(sortedMap[j]){
              mf.push(sortedMap[j][0])
          }
      }
      return mf;
  
  };