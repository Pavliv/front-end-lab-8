var movies = [
	{
		"id": 70111470,
		"title": "Die Hard",
		"boxart": " http://bb-1/654356453",
		"uri": " http://bb-1/654356453",
		"rating": 2.7,
		"bookmark": []
	}, {
		"id": 654356453,
		"title": "GoodMood",
		"boxart": "http://bb-1",
		"uri": " http://bb-1/654356453",
		"rating": 3.5,
		"bookmark": [{time: 65876586}]
	}, {
		"id": 65432445,
		"title": "The Chamber",
		"boxart": "http://ch-1",
		"uri": " http://ch-1/65432445",
		"rating": 3.0,
		"bookmark": []
	}, {
		"id": 675465,
		"title": "Fracture",
		"boxart": "http://fr-1",
		"uri": " http://fr-1/675465",
		"rating": 4.0,
		"bookmark": [{time: 65876586}]
	}];

function collectIds(arr) {
	var moreThan3 = [];
	var i;
	for (i = 0; i < arr.length; i++) {
		if (arr[i].rating > 3.0) {
			moreThan3.push(arr[i].id);
		}
	}
	return moreThan3;
}
collectIds(movies);