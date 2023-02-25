let body = document.body;
let div = document.createElement("div");

body.appendChild(div);
let h1 = document.createElement("h1");
let h2 = document.createElement("h2");
let ul = document.createElement("ul");
let msg = document.createElement("div");
let button = document.createElement("button");
let input = document.createElement("input");
h1.textContent = "Number Generator";
h2.textContent = "30DaysOfJavaScript:DOM Day 3";
h2.style.textDecoration = "underline";
h2.style.fontWeight = "normal";

div.appendChild(h1);
div.appendChild(h2);
div.appendChild(msg);
div.appendChild(input);
div.appendChild(button);
div.appendChild(ul);

body.style.textAlign = "center";
body.style.fontFamily = "sans-serif";

button.innerText = "Generate Numbers";
button.style.textAlign = "center";
button.style.fontSize = "25px";
button.style.color = "white";
button.style.height = "40px";
button.style.backgroundColor = "#32a852";
button.style.margin = "0 5px";

input.style.fontSize = "25px";
input.style.height = "35px";
input.style.margin = "0 5px";

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; num > i; i++) {
    if (num === 2) {
      return true;
    } else if (num % i == 0) {
      return false;
    }
  }
  return true;
}

button.addEventListener("click", function () {
  msg.textContent = "";
  let val = input.value;
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  if (typeof Number(val) === "number" && Number(val) > 0) {
    input.value = "";
    for (let i = 0; i <= val; i++) {
      if (isPrime(i)) {
        let li = document.createElement("li");
        li.innerText = i;
        li.style.padding = "15px 0";
        li.style.textAlign = "center";
        li.style.fontSize = "25px";
        li.style.width = "120px";
        li.style.color = "white";
        li.style.height = "30px";
        li.style.backgroundColor = "#f55742";
        li.style.listStyle = "none";
        li.style.margin = "5px 5px";
        ul.appendChild(li);
      } else if (i % 2 === 0) {
        let li = document.createElement("li");
        li.innerText = i;
        li.style.padding = "15px 0";
        li.style.fontSize = "25px";
        li.style.width = "120px";
        li.style.color = "white";
        li.style.height = "30px";
        li.style.backgroundColor = "#42f575";
        li.style.listStyle = "none";
        li.style.margin = "5px 5px";
        ul.appendChild(li);
      } else {
        let li = document.createElement("li");
        li.innerText = i;
        li.style.padding = "15px 0";
        li.style.fontSize = "25px";
        li.style.width = "120px";
        li.style.color = "white";
        li.style.height = "30px";
        li.style.backgroundColor = "#f5dd42";
        li.style.listStyle = "none";
        li.style.margin = "5px 5px";
        ul.appendChild(li);
      }
    }
  } else if (val.length === 0) {
    msg.textContent = "PLEASE ENTER A NUMBER!";
    msg.style.color = "red";
  } else if (typeof val === "string") {
    msg.textContent = "PLEASE ENTER NUMBERS ONLY";
    msg.style.color = "red";
  }
  input.value = "";
});

ul.style.display = "flex";
ul.style.flexWrap = "wrap";
ul.style.justifyContent = "center";
