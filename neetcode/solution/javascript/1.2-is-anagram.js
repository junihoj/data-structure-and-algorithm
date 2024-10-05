function isAnagram (s,t){
	if(s.length !== t.length)return false

	return reorder(s)==reorder(t)
}



function reorder(arr){
	return s.split("").sort((a,b)=>a.localeCompare(b)).join("")

}

