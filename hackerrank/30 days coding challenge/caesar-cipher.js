// function caesarCipher(s, k) {
//     // Write your code here
    
//     let str = '';
//     for(const char of s){
//         // const pos = char.toLowerCase().charCodeAt(0) - 96;
//         // const en = ((pos + k) % 26);
//         // str += /^[a-zA-Z]$/.test(char) ? numberToChar(en): char;
//         let en;
//         if(/^[a-zA-Z]$/.test(char)){
            
//             if(char.charCodeAt(0)>90){
//                 const pos = char.charCodeAt(0) - 96;
//                 str+= numberToChar(((pos + k) % 26))
//             }else{
//                 const pos = char.charCodeAt(0) - 64;
//                 str+= numberToChar(((pos + k) % 26), true)
//             }
//         }else{
//             str += char;
//         }
//     }
//     return str;
// }
// function numberToChar(num, isUpperCase=false){
//     const base = isUpperCase ? 64 : 96;
//     return String.fromCharCode(base + num);
// }



function caesarCipher(s, k) {
    // Write your code here
    
    let str = '';
    for(const char of s){
        if(65 <= char.charCodeAt(0) && char.charCodeAt(0)<= 90){
            let p = 65 + ((char.charCodeAt(0) - 65 + k) % 26);
            str += String.fromCharCode(p)
        }else if(97 <= char.charCodeAt(0) && char.charCodeAt(0) <= 122){
            let p = 97 + ((char.charCodeAt(0) - 97 + k) % 26);
            str += String.fromCharCode(p)
        }else{
            str +=char
        }
        
    }
    return str;
}