function getClosestToZero() {
	var closest = arguments[0];
	var i;
	for (i = 0; i < arguments.length; i++) {
		if (arguments[0] > arguments[i]) {
			closest = arguments[i];
		}
	}
	return closest;
}