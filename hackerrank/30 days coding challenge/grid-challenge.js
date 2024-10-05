// function gridChallenge(grid) {
//     // Write your code here
//     let newGrid = grid.map((el)=>{
//         return el.split("").sort((a,b)=>a.localeCompare(b));
//     })
    
//     let r = newGrid.length;
//     let col = newGrid[0].length;
//     for(let i=0; i<col; i++){
//         for(let j=0; j<r; j++){
//             if(j-1 >=0){
              
//                if( newGrid[j-1][i].localeCompare(newGrid[j][i]) > 0) return "NO";
//             }
//         }
//     }
    
//     // let r = grid.length - 1;
//     // let col = grid[0]
    
//     return "YES"
// }


function gridChallenge(grid) {
    // Write your code here
    // let newGrid = grid.map((el)=>{
    //     return el.split("").sort((a,b)=>a.localeCompare(b));
    // })
    
    let r = grid.length;
    let col = grid[0].length;
    for(let i=0; i<col; i++){
        for(let j=0; j<r; j++){
            if(j-1 >=0){
              
               if( grid[j-1][i].localeCompare(grid[j][i]) > 0) return "NO";
            }
        }
    }
    
    // let r = grid.length - 1;
    // let col = grid[0]
    
    return "YES"
}