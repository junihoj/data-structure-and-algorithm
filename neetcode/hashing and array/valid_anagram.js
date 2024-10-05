var isAnagram = function(s, t) {
    if(s?.length !== t?.length) return false
   const map = new Map()

   for(let i=0; i<s.length; i++){
       map.set(s[i], (map.get(s[i])|| 0 ) + 1)
       map.set(t[i], (map.get(t[i])|| 0 ) - 1)
   }
   for(const [key, value] of map){
       if(value != 0){
           return false
       }
   }

   return true;
};

//method 2

var isAnagram2 = (s, t) => {
    const isEqual = s.length === t.length;
    if (!isEqual) return false;

    return reorder(s) === reorder(t); /* Time O(N * logN) | Space O(N) */
};

const reorder = (str) => str
    .split('')                         /* Time O(N)          | Space O(N) */
    .sort((a, b) => a.localeCompare(b))/* Time O(N * log(N)) | Space O(1 || log(N)) */
    .join(''); 