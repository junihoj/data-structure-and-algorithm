function Dp(s){
    s.length ==0? 0:recurse(0, s);
}

function recurse(p, s){
    let n = s.length;
    if(p==n) return 1;
    if(s[p] == '0') return 0;

    let res = recurse(p+1, s);
    console.log("HERE IS RES", res)

    if( p < n-1 && (s[p]=='1'|| (s[p]=='2'&& s[p+1]<'7'))) res += recurse(p+2,s);
    return res;
}

Dp("123")