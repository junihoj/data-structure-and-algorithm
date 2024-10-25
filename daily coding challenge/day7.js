/* 

This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.

*/

/* 
    '26' 'af' 'z' return 2
    '101' 'ja' return 1
    '602' return 0

    create an array
    for n to 0 iterate over encoded msg
    check char at i
    check char at i + 1
    array[i] will store num of ways to decode from char i to end of encoded msg
    return array[0]
*/


function dailyCodingProblem7(encoded){
    let arr = Array(encoded.length + 1);
    arr[encoded.length] = 1;

    for(let i= encoded.length -1; i>=0; i--){
        if(encoded.charAt(i) == '0'){
              arr[i] = 0;
        }else if(i == (encoded.length -1)){
            arr[i] = 1;
        }else{
            let twoDigit = parseFloat(`${encoded.charAt(i)}${encoded.charAt(i+1)}`)
            if(twoDigit < 27){
                arr[i] = arr[i+2]   
            }

            arr[i] += arr[i+1]
        }
    }

    return arr[0]
}

console.log(dailyCodingProblem7("121"))