function getFilteredArray(arr, func) {
	var filteredArray = [];
	var i;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === undefined) {
			arr.splice(i, 1); // Doesn't work
		}
		filteredArray.push(func(arr[i]));
	}
	return filteredArray;
}

function predicateFunction(num) {
	if (num > 3) {
		return num;
	}
}

getFilteredArray([1, 7, 20, 33, 16, 40, 45, 2], predicateFunction);