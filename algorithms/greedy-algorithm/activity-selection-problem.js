/* 

 assumming the end time is already sorted
*/

function activitySelection(s, f){
    let i, j;

    i=0;
    n = s.length;
    console.log(i)
    for(let j=1; j<n; j++){
        if(f[i] <= s[j]){
            console.log(j)
            i = j
        }
    }
}


//using priority queque
class Pair{
    first;
    second;
    constructor(first, second){
        this.first = first;
        this.second = second;
    }
}

function selectionPriorityQueque(s, f){
    let p = [];
    let ans = [];

    for(let i=0; i< s.length; i++){
        p.push(new Pair(s[i], f[i]));
    }

    p.sort((a,b)=>a.second - b.second);
    let it = p.shift()

    // ans.push(it);
    // if(p.length) return null
    while(p.length !=0){
        let itr = p.shift();
        if(itr?.first > it?.second){
            ans.push(itr);
            it = itr
        }
    }

    return ans;
}