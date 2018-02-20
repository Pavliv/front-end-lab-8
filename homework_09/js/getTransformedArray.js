function getTransformedArray(arr, func) {
	var transformedArray = [];
	var i;
	for (i = 0; i < arr.length; i++) {
		transformedArray.push(func(arr[i]));
	}
	return transformedArray;
}

function increment(num) {
	return num += 1;
}

getTransformedArray([3, 7, 20], increment);