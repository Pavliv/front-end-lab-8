function reverse(a) {
	var x = a.toString().split('')
	var num;
	if(x[0] == '-') {
		var c = x.shift()
		num = parseInt(c + x.reverse().join(''))
	} else {
	num = parseInt(x.reverse().join(''))
	}
	return num
};