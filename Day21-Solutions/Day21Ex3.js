let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let ulList = document.querySelector("ul");
let div = document.querySelector("div");
let listItems = document.querySelectorAll("li");

//Organizing Body

body.style.textAlign = "center";
body.style.fontFamily = "sans-serif";

//Organizing H1
h1.innerHTML = `Asabeneh Yetayeh challenges in <span>2020</span>`;
let span = document.querySelector("span");
span.style.fontSize = "60px";
let color;
const randColor = () => {
  let random1 = Math.floor(Math.random() * 255);
  let random2 = Math.floor(Math.random() * 255);
  let random3 = Math.floor(Math.random() * 255);
  color = `rgb(${random1},${random2},${random3})`;
  span.style.color = color;
};
setInterval(randColor, 1000);

//Organizing h2

h2.style.textDecoration = "underline";
h2.style.fontWeight = "normal";

//adding and organizing p

let p = document.createElement("p");
div.insertBefore(p, ulList);
p.style.width = "300px";
p.style.margin = "0 auto";
const context = () => {
  p.textContent = Date();
};

const randTime = () => {
  let random1 = Math.floor(Math.random() * 255);
  let random2 = Math.floor(Math.random() * 255);
  let random3 = Math.floor(Math.random() * 255);
  color = `rgb(${random1},${random2},${random3})`;
  p.style.backgroundColor = color;
};
setInterval(randTime, 1000);
setInterval(context, 1000);

//Organizing list items

listItems.forEach((li) => {
  li.style.listStyle = "none";
  li.style.display = "flex";
  li.style.alignItems = "center";
  li.style.justifyContent = "center";
  li.style.padding = "0";
  li.style.margin = "5px auto";
  li.style.width = "600px";
  li.style.height = "40px";
  if (li.textContent.toLowerCase().includes("done")) {
    li.style.backgroundColor = "green";
  } else if (li.textContent.toLowerCase().includes("ongoing")) {
    li.style.backgroundColor = "yellow";
  } else {
    li.style.backgroundColor = "red";
  }
});
