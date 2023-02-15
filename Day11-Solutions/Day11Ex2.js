import { users } from './Day11Ex1.js';

for (const {name, scores, skills, age} of users) {
  console.log(name, scores, skills, age);
  };

for (const {name, scores, skills, age} of users) {
  if(skills.length <2){
  console.log(name);
  }
  };
