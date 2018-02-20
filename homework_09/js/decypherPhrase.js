function decypherPhrase(obj, str) {
	var res = str.split("");
	var i;
	for (var i = 0; i < res.length; i++) {
		if (res[i] == "o") {
			res[i] = obj.o;
		}
		if (res[i] == "d") {
			res[i] = obj.d;
		}
		if (res[i] == "g") {
			res[i] = obj.g;
		}
	}
	return res.join("");
}

var charactersMap = {o: "a", d: "c", g: "t"}
decypherPhrase(charactersMap, "kiggy dog"); // -> “kitty cat”