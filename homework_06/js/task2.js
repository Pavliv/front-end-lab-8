// Store values to variables
var euro = Number(prompt("Please input amount of EURO: "));
var usd = Number(prompt("Please input amount of USD: "));

// Conversion in different currencies
var euroInUah = euro * 33.0617;
var usdInUah = usd * 27.0083;
var euroInUsd = 33.0617 / 27.0083;

// Checking for integer or fractional number
var euro = (Number.isInteger(euro)) ? euro : euro.toFixed(2);
var usd = (Number.isInteger(usd)) ? usd : usd.toFixed(2);
var euroInUah = (Number.isInteger(euroInUah)) ? euroInUah : euroInUah.toFixed(2);
var usdInUah = (Number.isInteger(usdInUah)) ? usdInUah : usdInUah.toFixed(2);
var euroInUsd = (Number.isInteger(euroInUsd)) ? euroInUsd : euroInUsd.toFixed(3);

// Console log
console.log(euro + " euros are equal " + euroInUah + " UAH, " + usd + " dollars are equal " + usdInUah + " UAH, one euro is equal " + euroInUsd + " dollars.");