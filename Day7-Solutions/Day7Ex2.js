capitalizeArr = (arr) => {
  let newArr = [];
  arr.forEach(function (ar) {
      newArr.push(ar.toUpperCase());
  })
  console.log(newArr);
}
capitalizeArr(["tolgahan", "blabla"]);

function solveQuadEquation(a,b,c){
  let num1 = (-b + Math.sqrt(b*b-4*a*c))/(2*a);
  let num2 = (-b - Math.sqrt(b*b-4*a*c))/(2*a);
  if(num1==num2){
    console.log(num1);
  }else{
    console.log(num1);
    console.log(num2);
  }
}

solveQuadEquation(1,2,1);

function printArray(array){
  for (let i=0; i<array.length ; i++){
    console.log(array[i]);
  }
}
printArray([1,2,3,"Hi!"]);

function showDateTime(){
let now = new Date();
console.log(`${now.getDay()+1}/${now.getMonth()+1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`);
}
showDateTime();

function swapValues(x,y){
  const arr = [x,y];
  x = arr[1];
  y = arr[0];
  console.log(`x=${x}`);
  console.log(`y=${y}`);
}
swapValues(3,4);

function reverseArray(arr){
  const arr2 = [];
  for (let i=arr.length-1; i>=0; i--){
  arr2.push(arr[i]);
}
console.log(arr2);
}

reverseArray([3,6,8,15]);

function addItem(item){
  const arr3 = [];
  arr3.push(item);
  console.log(arr3);
}
addItem(3);

function removeitem(index){
  let names = ["tolgahan", "feyizoğlu"]
  names.splice(index);
  console.log(names);
}
removeitem(1);

function sumOfNumbers(...numbers){
  let sum = 0;
  numbers.forEach(function (numbers) {
      sum += numbers
  })
  console.log(sum);
}
sumOfNumbers(1,2,3,4,5);

function sumOfOdd(...numbers){
  let oddSum = 0;
  numbers.forEach(function (number) {
      if (number % 2 !== 0) {
          oddSum += number
      }
  })
  console.log(oddSum);
}
sumOfOdd(1,2,3,4,5);

function sumOfEven(...numbers){
  let evenSum = 0;
  numbers.forEach(function (number) {
      if (number % 2 === 0) {
          evenSum += number
      }
  })
  console.log(evenSum);
}
sumOfEven(1,2,3,4,5);

function evenAndOdds(num){
  let odd = 0;
  let even = 0;
  for (let i = 0; i <= num; i++) {
      if (i % 2 === 0) {
          even++
      } else if (i % 2 !== 0) {
          odd++
      }
  }
  console.log(`the number of odds are ${odd}\nthe number of even are ${even}`);
}
evenAndOdds(100);

function randomUserIp(){
  let random = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  let id = "";
  let rand = Math.floor(Math.random()*random.length);
  for (let i=0; i<10; i++){
    id+=random[rand];
    rand = Math.floor(Math.random()*random.length);
  }
  console.log(id);
}

randomUserIp();

function randomMacAddress(){
  let chars = "0123456789ABCDEF";
  let one = "";
  for (let i = 0; i < 2; i++) {
    one += chars[Math.floor(Math.random() * chars.length)];
  }
  let two = "";
  for (let i = 0; i < 2; i++) {
    two += chars[Math.floor(Math.random() * chars.length)];
  }
  let three = "";
  for (let i = 0; i < 2; i++) {
    three += chars[Math.floor(Math.random() * chars.length)];
  }
  let four = "";
  for (let i = 0; i < 2; i++) {
    four += chars[Math.floor(Math.random() * chars.length)];
  }
  let five = "";
  for (let i = 0; i < 2; i++) {
    five += chars[Math.floor(Math.random() * chars.length)];
  }
  let six = "";
  for (let i = 0; i < 2; i++) {
    six += chars[Math.floor(Math.random() * chars.length)];
  }

  console.log(`${one}-${two}-${three}-${four}-${five}-${six}`);
}
randomMacAddress();

function randomHexaNumberGenerator(){
  let chars = "0123456789ABCDEF";
  let hex = "";
  for (let i = 0; i < 6; i++) {
    hex += chars[Math.floor(Math.random() * chars.length)];
  }

  console.log(`#${hex}`);
}

randomHexaNumberGenerator();

function userIdGenerator(){
  let random = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  let id = "";
  let rand = Math.floor(Math.random()*random.length);
  for (let i=0; i<7; i++){
    id+=random[rand];
    rand = Math.floor(Math.random()*random.length);
  }
  console.log(id);
}

userIdGenerator();