const student = {
  firstName:'Tolgahan',
  lastName:'Feyizoğlu',
  age:28,
  isMarried:false,
  skills:['HTML', 'CSS', 'JS', 'React','Node',]
}

let studentJSON =  JSON.stringify(student, ['firstName', 'lastName', 'skills'],3);
console.log(studentJSON);