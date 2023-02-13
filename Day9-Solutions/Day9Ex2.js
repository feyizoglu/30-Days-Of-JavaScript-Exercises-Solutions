import { countries } from './countries.js';

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: "" },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: "" },
];

const totalPrice = products.map(product => {
  return product.price;
}).filter(price => {
  return price > 0;
}).reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
})
console.log(totalPrice);

function categorizeCountries(pattern) {
  const category = countries.filter((country) =>
  country.name.includes(pattern)
)
return category;
} 

console.log(categorizeCountries("ia"));

function startingLetter(letter) {
  const category = countries.filter((country) =>
  country.name.startsWith(letter.toUpperCase())
)
return `${category.length} countries names starts with "${letter}"`;
} 

console.log(startingLetter("f"));

const getFirstTenCountries = (countries) => {
  let firstTen = [];
  firstTen = countries.map(country => {
      return country;
      })
  return firstTen.splice(0,10);
}

console.log(getFirstTenCountries(countries));

const getLastTenCountries  = (countries) => {
  let firstTen = [];
  firstTen = countries.map(country => {
      return country;
      })
  return firstTen.splice(240,251);
}

console.log(getLastTenCountries(countries));

function letterTimes() {
const alphabet = ["A", "B", "C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","W","X","V","Z"];
const newObject = {};
  for (let i=0; i<alphabet.length; i++){
    let letter = alphabet[i];
    const category = countries.filter((country) =>
    country.name.startsWith(letter))
    newObject[letter] = category.length;  
  }
  for(let i=0; i<alphabet.length;i++){
    if(Object.values(newObject)[i] === Math.max(...Object.values(newObject))){
    return `"${Object.keys(newObject)[i]}" is used ${Object.values(newObject)[i]} times as first letter for countries.`
  }
  }
}

console.log(letterTimes());


// function startingLetter(letter) {
//   const category = countries.filter((country) =>
//   country.name.startsWith(letter.toUpperCase())
// )
// return `${category.length} countries names starts with "${letter}"`;
// } 

// console.log(startingLetter("f"));
