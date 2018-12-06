let romanNumerals = [
  "",
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "",
  "X",
  "XX",
  "XXX",
  "XL",
  "L",
  "LX",
  "LXX",
  "LXXX",
  "XC",
  "",
  "C",
  "CC",
  "CCC",
  "CD",
  "D",
  "DC",
  "DCC",
  "DCCC",
  "CM",
  "",
  "M"
];

let num = 1453;
let numArray = num.toString().split("");
let numInt = numArray.map(x => parseInt(x));

let i = 0;
let roman = "";

while (i < numInt.length) {
  let x = numInt.length - 1 - i;
  let y = x * 10;
  let z = y + numInt[i];

  roman += romanNumerals[z];
  i++;
}

console.log(roman);
