// Store values to variables
var a = Number(prompt("Which length for first side?"));
var b = Number(prompt("Which length for second side?"));
var c = Number(prompt("Which length for third side?"));

// Formula of the square of the triangle
var p = (a + b + c) / 2;

// Checking for integer or fractional number
if (Number.isInteger(p)) {
	var s = p;
} else {
	var s = p.toFixed(2);
}

// Checking the entered data and determining the type of triangle
if (a <= 0 || b <= 0 || c <=0 || isNaN(a) || isNaN(b) || isNaN(c)) {
	console.log ("Incorrect data");
} else {
	if (c * c == (a * a) + (b * b)) {
		console.log("Type of triangle is right triangle and square is " + s);
	} else if (a == b && b == c && c == a) {
		console.log("Type of triangle is equilateral triangle and square is " + s);
	} else if (a == b || b == c || c == a) {
		console.log("Type of triangle is isosceles triangle and square is " + s);
	} else if (a != b && b != c && c != a) {
		console.log("Type of triangle is scalene triangle and square is " + s);
	} else {
		console.log("Incorrect data")
	}
}