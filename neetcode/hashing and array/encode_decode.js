class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""
        for(const s of strs){
            res += (s.length).toString() + "#" + s
        }
        console.log("ENCODED", res)
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        let i =0;

        //while i is still in bound
        while(i<str.length){
            let j = i;
            while(str[j] != "#"){
                j +=1;
            }
            let length = Number(str.slice(i, j))
            res.push(str.slice(j+1, j+1+length));
            i= j+1+length
        }
        console.log('DECODED', res)
        return res;
    }
}

let obj = new  Solution()
const encoded = obj.encode(["neet","code","love","you"]);
obj.decode(encoded)