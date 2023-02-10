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
]

const countries2 = [...countries];
console.log(countries2);
const sortedCountries = countries2.sort();
console.log(sortedCountries);

const mernStack = ["MongoDb", "Express", "React", "Node"];

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack2 = mernStack.sort();
const webTechs2 = webTechs.sort();

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


const numArr = [];
for (let i=0; i<countries.length;i++){
  numArr.push(countries[i].length);
}
let maxNum = numArr.reduce((a, b) => { return Math.max(a, b) });
console.log(maxNum);
console.log(countries[numArr.indexOf(maxNum)]);


const newArr = [];
for (let i=0; i<countries.length;i++){
  if (numArr[i] === 4){
    newArr.push(countries[i]);
  }
}
console.log(newArr);


const newArr2 = [];
for (let i=0; i<countries.length;i++){
  if (numArr[i] >= 2){
    newArr2.push(countries[i]);
  }
}
console.log(newArr2);

const capCountries = [];
for (let i=0; i<countries.length; i++){
  capCountries.push(countries2.reverse()[i].toUpperCase())
} 

console.log(capCountries);