let firstParagraph = document.querySelector("p");
console.log(firstParagraph);

console.log(document.querySelector("#first"));
console.log(document.querySelector("#second"));
console.log(document.querySelector("#third"));
console.log(document.querySelector("#fourth"));

const allParagps = document.querySelectorAll("p");

allParagps.forEach((paragraph) => console.log(paragraph.innerText));

allParagps[3].textContent = "Fourth Paragraph";

allParagps[2].id = "third-one";
allParagps[1].className = "new-class";
allParagps[0].setAttribute("class", "first-one");
allParagps[1].classList.add("second-one");
