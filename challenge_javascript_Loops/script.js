const cats = [
  "Meowy",
  "Nutty",
  "Happy",
  "Fatty",
  "Brownie",
  "Cookie",
  "Blackie",
  "Notty",
  "Camry",
  "Mack",
  "Peanut",
  "Butter",
  "Pepper",
  "Salt"
];

function foundCat(name, count) {
  document.getElementById("cat").innerHTML = `${name} is inside room ${count}.`;
}

// While Loop
let count = 0;
let found = -1;
const name = "Mack";

while (count < cats.length) {
  if (cats[count] == name) {
    foundCat(name, count);
    break;
  }
  count += 1;
}

/* finding the longest name + while loop */
const names = [
  "Sheng",
  "Kevin",
  "Audrey",
  "KJ",
  "Delilah",
  "Josh",
  "Mack",
  "Rey"
];

//let countNames = 0;
let longestNames = "";

function greet(name) {
  document.getElementById("long").innerHTML = `The longest name is ${name}`;
}
// while (countNames < names.length) {
//   if (names[countNames].length > longestNames.length) {
//     longestNames = names[countNames];
//   }
//   greet(longestNames);
//   countNames = countNames + 1;
// }

/* finding the longest name + for loop */

for (let i = 0; i < names.length; i++) {
  if (names[i].length > longestNames.length) {
    longestNames = names[i];
  }
  greet(longestNames);
}

//for loop

function printLoop(i) {
  let p = document.createElement("p");
  let text = document.createTextNode(`for loop: ${i}`);
  p.appendChild(text);
  document.getElementById("for").appendChild(p);
}

for (let i = 40; i <= 100; i += 10) {
  printLoop(i);
}

/*================ Practice 1: odd or even ================*/

function oddEven(num, is) {
  let p = document.createElement("p");
  let text = document.createTextNode(`${num} is ${is}`);
  p.appendChild(text);
  document.getElementById("odd").appendChild(p);
}

for (let i = 0; i <= 20; i++) {
  if (i % 2 == 1) {
    oddEven(i, "odd");
  } else {
    oddEven(i, "even");
  }
}

/*================ Practice 2:assigning grades ================*/
const scores = [99, 52, 30, 78, 42, 96, 100, 80];

function printScores(score, grade) {
  let p = document.createElement("p");
  let text = document.createTextNode(`${score} is grade ${grade}`);
  p.appendChild(text);
  document.getElementById("grade").appendChild(p);
}

for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 90) {
    printScores(scores[i], "A");
  } else if (scores[i] >= 80) {
    printScores(scores[i], "B");
  } else if (scores[i] >= 50) {
    printScores(scores[i], "C");
  } else if (scores[i] >= 40) {
    printScores(scores[i], "D");
  } else {
    printScores(scores[i], "F");
  }
}
