// let random = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
// let id = "";
// for (let i=0; i<Math.floor(Math.random()*random.length);i++){
//   let rand = Math.floor(Math.random()*random.length);
//   id+=random[rand];
// }
// console.log(id);

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

let random = "0123456789abcdef";
let id = "#";
for (let i=0; i<6;i++){
  let rand = Math.floor(Math.random()*random.length);
  id+=random[rand];
}
console.log(id);


let i = Math.floor(Math.random()*241);
let k = Math.floor(Math.random()*241);
let l = Math.floor(Math.random()*241);
let rgb = `rgb(${i},${k},${l})`;
console.log(rgb);

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];

const arr =[];
for(let i=0; i<countries.length;i++){
  arr.push(countries[i].toUpperCase());
}
console.log(arr);

const arr2 =[];
for(let i=0; i<countries.length;i++){
  arr2.push(countries[i].length);
}
console.log(arr2);

const arr3 =[];
for(let i=0; i<countries.length;i++){
  arr3.push([countries[i], countries[i].slice(0,3).toUpperCase(), countries[i].length ]);
}
console.log(arr3);

const landCountries = [];
const countriesWithoutLand = [];
for ( let i=0; i<countries.length;i++){
  if (countries[i].includes("land")){
    landCountries.push(countries[i]);
  }else{
    countriesWithoutLand.push(countries[i]);
  }
}
console.log(landCountries);

const iaCountries = [];
for ( let i=0; i<countries.length;i++){
  if (countries[i].endsWith("ia")){
    iaCountries.push(countries[i]);
  }
}
console.log(iaCountries);


const numArr = [];
for (let i=0; i<countries.length;i++){
  numArr.push(countries[i].length);
}
let maxNum = numArr.reduce((a, b) => { return Math.max(a, b) });
console.log(maxNum);
console.log(countries[numArr.indexOf(maxNum)]);

const newArr = [];
for (let i=0; i<countries.length;i++){
  if (numArr[i] === 5){
    newArr.push(countries[i]);
  }
}
console.log(newArr);

const numArr2 = [];
for (let i=0; i<webTechs.length;i++){
  numArr2.push(webTechs[i].length);
}
let maxNum2 = numArr2.reduce((a, b) => { return Math.max(a, b) });
console.log(webTechs[numArr2.indexOf(maxNum2)]);


const webTechs2=[];
for(let i=0; i<webTechs.length;i++){
  webTechs2.push([webTechs[i], webTechs[i].length ]);
}
console.log(webTechs2);


let mernStack = ["MongoDb", "Express", "React", "Node"];
let mern = [];
for (let i = 0; i<mernStack.length; i++){
  mern.push(mernStack[i]);
}
console.log(mern);

const newArr2 = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

for (let language of newArr2) {
  console.log(language);
}

const fruits = ['banana', 'orange', 'mango', 'lemon'];
const fr2 = [];

for (let i=fruits.length-1; i>=0; i--){
  fr2.push(fruits[i]);
}
console.log(fr2);

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

for(let i=0; i<fullStack.length;i++){
  for (let j=0; j<fullStack[i].length; j++){
    console.log(fullStack[i][j]);
  }
}