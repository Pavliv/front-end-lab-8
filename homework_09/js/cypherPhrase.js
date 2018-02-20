function cypherPhrase(obj, str) {
	var res = str.split("");
	var i;
	for (i = 0; i < res.length; i++) {
		if (res[i] == "a") {
			res[i] = obj.a;
		}
		if (res[i] == "c") {
			res[i] = obj.c;
		}
		if (res[i] == "t") {
			res[i] = obj.t;
		}
	}
	return res.join("");
}

var charactersMap = {a: "o", c: "d", t: "g"}
cypherPhrase(charactersMap, "kitty cat"); // -> “kiggy dog”