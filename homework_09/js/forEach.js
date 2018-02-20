function forEach(arr, func) {
	var i;
	for (i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}

forEach([3, 5, 2], function(el){ 
console.log(el);
})