/*
const header = document.querySelector("header");
const headText = document.querySelector("header h1");
const para = document.querySelectorAll("p");

const headerStyle = header.style;
const textStyle = headText.style;
//const paraStyle = para.style;

headerStyle.paddingBottom = "30px";
headerStyle.backgroundColor = "yellow";

textStyle.fontSize = "90px";

para[0].style.color = "blue";
para[1].style.color = "pink";

const myPara = document.querySelector(".big");
myPara.setAttribute("class", "big random");
myPara.classList.add("flash", "blue");
myPara.classList.remove("big");
myPara.classList.remove("random", "flash");
console.log(myPara.getAttribute("class"));
*/

/* ==========CHALLENGE Manipulating Element================ */
const myHeader = document.querySelector("header");
const section = document.querySelector("section");

const newPara = document.createElement("p");
const newH2 = document.createElement("h2");
const secPara = document.createElement("p");

myHeader.classList.add("text-center");
section.classList.add("text-center");

newPara.innerHTML = "I am a new Para";
myHeader.appendChild(newPara);

newH2.innerHTML = "Coding Journey";
section.appendChild(newH2);

secPara.innerHTML = "It's been fun!";
section.appendChild(secPara);

/* ==========CHALLENGE Event Handler================ */

const colorClass = [
  "btn-primary",
  "btn-secondary",
  "btn-success",
  "btn-danger",
  "btn-warning",
  "btn-dark"
];
const buttonClass = document.querySelector("button");

function suprise() {
  alert("I am clicked");

  const randomColor = Math.floor(Math.random() * colorClass.length);
  const buttonAttr = buttonClass.getAttribute("class").split(" ");

  buttonClass.innerHTML = "Change Color";

  for (let i = 0; i < buttonAttr.length; i++) {
    if (colorClass.includes(buttonAttr[i])) {
      buttonClass.classList.remove(`${buttonAttr[i]}`);
      buttonClass.classList.add(colorClass[randomColor]);
    }
  }
}

function changeColor() {
  buttonClass.style.color = "black";
}

function changeBack() {
  buttonClass.style.color = "white";
}
