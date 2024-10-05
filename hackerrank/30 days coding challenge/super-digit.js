function superDigit(n, k) {
    // Write your code here
    let sp = n.split("").reduce((sum, el)=> sum + Number(el),0);
    let next = (sp * k) + ""
    return (next.length == 1) 
        ? Number(next) : superDigit(next, 1);
}