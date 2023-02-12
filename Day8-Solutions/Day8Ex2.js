const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

let winner;
let max = 0

for (const user in users) {
    if (users[user].skills.length > max) {
        max = users[user].skills.length;
        winner = user
    }
}
console.log(winner);

let loggedUsers = 0;
for (const user in users){
  if (users[user].isLoggedIn == true){
    loggedUsers+=1;
  }
}
console.log(loggedUsers);

let count = 0;
for (const user in users){
  if (users[user].points >= 50){
    count+=1;
  }
}
console.log(count);

let mernUsers = [];
for (const user in users){
  if (users[user].skills.indexOf('MongoDB') > 0){
    mernUsers.push(Object.keys(users)[Object.keys(users).indexOf(user)]);
  }
}
console.log(mernUsers);

users.Tolgahan = {
  email: 'feyizoglutolgahan@hotmail.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  age: 28,
  isLoggedIn: false,
  points: 55
}

console.log(users);
console.log(Object.entries(users));

console.log(Object.values(users));

let country = {
  name: "Türkiye",
  capital: "Ankara",
  population: "80 billion",
  language: "Turkish",
}
console.log(`${country.name}\n${country.capital}\n${country.population}\n${country.language}`)