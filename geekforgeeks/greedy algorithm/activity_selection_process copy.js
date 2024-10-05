// Parameters may be declared in a variety of syntactic forms
/**
 * @param {Array<int>}  s - array of start time.
 * @param {Array<int>} f - array of finish time
 * @param {number} n - number of activities.
 * @returns {string} This is the result
 */
function activitySelection(s, f, n){
    //this function assumes the array are not sorted    
    //combined the two arrays
    let activities=[];
    let combineActivity = []
    for(let i=0; i<f.length; i++){
        combineActivity.push([s[i], f[i]])
    }

    //sort the array according to finish time
    combineActivity.sort((a,b)=>a[1] - b[1]);

    activities[0] = combineActivity[0];
    for(let i=1; i<combineActivity.length; i++){
        if(combineActivity[i][0] > activities[activities.length -1][1]){
            activities.push(combineActivity[i]);
        }
    }

    console.log(activities)
}

let s = [1, 3, 0, 5, 8, 5]
let f = [2, 4, 6, 7, 9, 9]
let n = s.length;

activitySelection(s,f,n);