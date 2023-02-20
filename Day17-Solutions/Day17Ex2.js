let student = {
  firstName: "Tolgahan",
  lastName: "Feyizoğlu",
  age: 28,
  skills: ["html", "css", "javascript", "react"],
  country: "Türkiye",
};

const studentJSON = JSON.stringify(student, undefined, 3);
localStorage.setItem("student", studentJSON);
console.log(studentJSON);
console.log(localStorage);
