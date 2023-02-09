//EX2-Q1
import { countries } from './countries.js';
import { webTechs } from './web_techs.js';

console.log(countries);
console.log(webTechs);

//EX2-Q2
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.split(" ");
console.log(words);
console.log(words.length);

//EX2-Q3

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";

console.log(shoppingCart);

//EX2-Q4

if (countries.indexOf('Ethiopia')!= -1){
  console.log('Ethiopia');
}else{
  countries.push('Ethiopia');
};
console.log(countries);

//EX2-Q5

if (webTechs.indexOf('Sass')!= -1){
  console.log('Sass is a CSS preprocess');
}else{
  webTechs.push('Sass');
};
console.log(webTechs);

//EX2-Q6

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);


//Ex3-Q2

const tenCountries = countries.slice(0,10); 
console.log(tenCountries);

console.log(countries[Math.floor(countries.length/2-1)]);
console.log(countries);

//EX3-Q3

if(countries.length%2 ==0){
  console.log("Array is even");
}else{
  console.log("Array is not even");
}

const firstArr = countries.slice(0,[Math.ceil(countries.length/2)]); 
const secArr = countries.slice([Math.ceil(countries.length/2)],countries.length); 

console.log(firstArr);
console.log(secArr);
