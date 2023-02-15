import { countries } from './countries.js';

for (const {name, capital, languages, population} of countries) {
  console.log(name, capital, languages, population);
  };

  // const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
  // const [name, skills, [ , ,jsScore, reactScore]] = student;
  // console.log(name, skills, jsScore, reactScore);

  const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

function convertArrayToObject(arr){
   for (const [name, skills, scores] of arr){
   console.log({name,skills,scores});
   }
}
convertArrayToObject(students);

const student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}

let {name,
   age,
   skills: {
    frontEnd, backEnd, dataBase, dataScience
  }
} = student;

frontEnd = [...frontEnd, {
  skill: 'BootStrap',level: 8
}]
console.log(backEnd);
backEnd = [...backEnd, {
  skill: 'Express',level: 9
}]
console.log(dataBase);
dataBase = [...dataBase, {
  skill: 'SQL',level: 8
}]
console.log(dataScience);
dataScience = [...dataScience, 'SQL']
console.log(frontEnd);

const newStudent = {
  name,
  age,
  skills:{frontEnd,backEnd,dataBase,dataScience}
}
console.log(newStudent);



