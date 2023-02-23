// let firstP = document.querySelector("#first");
// let secondP = document.querySelector("#second");
// let thirdP = document.querySelector("#third-one");
// let fourthP = document.querySelector("#fourth");

// firstP.style.fontSize = "24px";
// secondP.style.fontSize = "2rem";
// thirdP.style.fontSize = "1em";
// fourthP.style.fontSize = "200%";

// firstP.style.color = "red";
// secondP.style.color = "blue";
// thirdP.style.color = "yellow";
// fourthP.style.color = "green";

// firstP.style.backgroundColor = "black";
// secondP.style.backgroundColor = "black";
// thirdP.style.backgroundColor = "black";
// fourthP.style.backgroundColor = "black";

// firstP.style.fontFamily = "sans-serif";
// secondP.style.fontFamily = "sans-serif";
// thirdP.style.fontFamily = "sans-serif";
// fourthP.style.fontFamily = "sans-serif";

const allParagps = document.querySelectorAll("p");

for (let i = 0; i < allParagps.length; i++) {
  if (i % 2 == 0) {
    allParagps[i].style.color = "green";
  } else {
    allParagps[i].style.color = "red";
  }
}

allParagps[0].id = "change-id";
console.log(allParagps[0]);

allParagps[1].className = "change-class";
console.log(allParagps[1]);

allParagps[2].textContent = "Hello";
console.log(allParagps[2]);

allParagps[3].setAttribute("class", "new-class");
console.log(allParagps[3]);
