let body = document.body;
let div = document.createElement("div");

body.appendChild(div);
let h1 = document.createElement("h1");
let h2 = document.createElement("h2");
let ul = document.createElement("ul");
h1.textContent = "Number Generator";
h2.textContent = "30DaysOfJavaScript:DOM Day 2";
h2.style.textDecoration = "underline";
h2.style.fontWeight = "normal";

div.appendChild(h1);
div.appendChild(h2);
div.appendChild(ul);

body.style.textAlign = "center";
body.style.fontFamily = "sans-serif";

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

for (let i = 0; i <= 101; i++) {
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

ul.style.display = "flex";
ul.style.flexWrap = "wrap";
ul.style.justifyContent = "center";
