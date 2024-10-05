function timeConversion(s: string): string {
    // Write your code here
    if(s.includes("AM")){
        let arr = s.split(":")
        let h = parseInt(arr[0]) == 12? "00" : arr[0]
        let m = arr[1]
        let se = arr[2].split("A")[0]
        
      return `${h}:${m}:${se}`
    }else{
        let arr = s.split(":")
        let h = parseInt(arr[0]) == 12? 12 : parseInt(arr[0]) + 12
        let m = arr[1]
        let se = arr[2].split("P")[0]
        return `${h}:${m}:${se}`
    }
}