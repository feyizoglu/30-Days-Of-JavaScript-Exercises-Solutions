const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python'];

let skillsJSON = JSON.stringify(skills);
console.log(typeof(skillsJSON));
console.log(typeof(skills));

let age = 28;
let ageJSON =  JSON.stringify(age);
console.log(ageJSON);
console.log(typeof(ageJSON));

let isMarried = false;
let isMarriedJSON =  JSON.stringify(isMarried);
console.log(isMarriedJSON);
console.log(typeof(isMarriedJSON));

const student = {
  firstName:'Tolgahan',
  lastName:'Feyizoğlu',
  age:28,
  isMarried:false,
  skills:['HTML', 'CSS', 'JS', 'React','Node',]
}
let studentJSON =  JSON.stringify(student);
console.log(studentJSON);
console.log(typeof(studentJSON));