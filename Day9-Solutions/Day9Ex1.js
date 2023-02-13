const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: "" },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: "" },
];

const callback = n =>{
  console.log(n);
}

countries.forEach(callback);
names.forEach(callback);
numbers.forEach(callback);

const countriesUppercase = countries.map(function(country){
  return country.toUpperCase();
})
console.log(countriesUppercase);

const countriesLength = countries.map(function(country){
  return country.length;
})
console.log(countriesLength);

const square = numbers.map(function(num){
  return num **2
})
console.log(square);

const namesUppercase = names.map(function(name){
  return name.toUpperCase();
})
console.log(namesUppercase);

const prices = products.map(function(product) {
  return `${product.product}:${product.price}`
})
console.log(prices)

const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)

const countriesSix = countries.filter((country) =>
  country.length == 6
)
console.log(countriesSix);

const countriesSixOrMore = countries.filter((country) =>
  country.length >= 6
)
console.log(countriesSixOrMore);

const countriesSWithE = countries.filter((country) =>
  country.startsWith('E')
)
console.log(countriesSWithE);

const pricesWithValues = products.filter((price) => 
  price.price
)

console.log(pricesWithValues);

const getStringList = (arr) => {
  const strArr = arr.filter(item => {
      return typeof item === "string"
  })
  return strArr;
}

let arr = getStringList(["victor", 3, 5, "kenneth"]);
console.log(arr);

const sum = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum);


const someSix = countries.some(country => {
  return country.length > 6;
})
console.log(someSix);

const containLand = countries.every(country => {
  return country.includes("land");
})
console.log(containLand);

const firstCountrySix = countries.find(country =>{
  return country.length == 6;
})
console.log(firstCountrySix);

const firstCountrySixP = countries.findIndex(country =>{
  return country.length == 6;
})
console.log(firstCountrySixP);


console.log(countries.findIndex(country => {return country.includes("Norway")}));
console.log(countries.findIndex(country => {return country.includes("Russia")}));