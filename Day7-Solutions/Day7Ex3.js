// // function userIdGeneratedByUser(){
// //   let random = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
// //   let idNo = Number(prompt("Enter number of id:"));
// //   let charNo = Number(prompt("Enter number of characters:"));
// //   let ids = [];
// //   for (i = 0; i < idNo; i++) {
// //       ids[i] = "";
// //       for (k = 0; k < charNo; k++) {
// //           ids[i] += random[Math.floor(Math.random() * random.length)];
// //       }
// //   }
// //   console.log(ids)
// //   ids.forEach(function (id) {
// //       console.log(id);
// //   })
// // }
// // userIdGeneratedByUser();

// function rgbColorGenerator(){
//   let first = Math.floor(Math.random() * 255);
//   let second = Math.floor(Math.random() * 255);
//   let third = Math.floor(Math.random() * 255);
//   console.log(`rgb(${first},${second},${third})`);
// }
// rgbColorGenerator();

// function arrayOfHexaColors(){
//   let chars = "0123456789ABCDEF";
//   let hex = [];
//   for (let i = 0; i < 3; i++) {
//       hex[i] = "#";
//       for (let k = 0; k < 6; k++) {
//           hex[i] += chars[Math.floor(Math.random() * chars.length)];
//       }
//   }

//   console.log(hex);
// }

// arrayOfHexaColors();


// function arrayOfRgbColors(){
//   let first = Math.floor(Math.random() * 255);
//   let second = Math.floor(Math.random() * 255);
//   let third = Math.floor(Math.random() * 255);
//   const arr = [];
//   for (let i = 0; i < 3; i++) {
//     arr[i] = `rgb(${first},${second},${third})`;
// }
// console.log(arr);
// }
// arrayOfRgbColors();

// function convertHexaToRgb(hexa){
//   let r = parseInt(hexa.slice(1, 3), 16);
//   let g = parseInt(hexa.slice(3, 5), 16);
//   let b = parseInt(hexa.slice(5, 7), 16);

//   console.log(`${r}, ${g}, ${b}`);
// }
// convertHexaToRgb("#1f33ff");

// function convertRgbToHexa(r, g, b){
//   let compR = r.toString(16);
//   let compG = g.toString(16);
//   let compB = b.toString(16);
//   if(compR.length ==1){
//     compR = `0${compR}`;
//   };
//   if(compG.length ==1){
//     compG = `0${compG}`;
//   };
//   if(compB.length ==1){
//     compB = `0${compB}`;
//   };
  
//   console.log(`#${compR}${compG}${compB}`)
// };
// convertRgbToHexa(15, 28, 255);

function generateColors(type, length){
  let characters = "0123456789ABCDEF";
  let colors = [];
  if (type === "rgb") {
    for (i = 0; i < length; i++) {
      colors[i] = "rgb";
      colors[i] += `(${ Math.floor(Math.random() * 255) },`;
      colors[i] += `${ Math.floor(Math.random() * 255) },`
      colors[i] += `${ Math.floor(Math.random() * 255) },)`
    }
  }else if (type === "hex") {
    for (let i = 0; i < length; i++) {
      colors[i] = "#";
      for (k = 0; k < 6; k++) {
        colors[i] += characters[Math.floor(Math.random() * characters.length)];
        }
    }
  }
  console.log(colors);
}
generateColors("hex", 5);

function shuffleArray(array){
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
      let rand = Math.floor(Math.random() * array.length - 1);
      if (array.indexOf(rand) !== -1 && !newArr.includes(array[rand])) {
          newArr.push(array[rand]);
      }
  }
  console.log(newArr);
}
shuffleArray([1, 2, 3, 5, 6, 8]);

function factorial(num){
  let factorial = 1;
  for (let i = num; i > 0; i--) {
    factorial *= i;
  }
  console.log(factorial);
}
factorial(7);

function isEmpty(par){
  if (par === undefined) {
    console.log("empty")
  }else{
    console.log("not empty")
}
}
isEmpty(5);

function sum(...args){
  let sum = 0;
  args.forEach(function (arg) {
    sum += arg
})
console.log(sum);
}

sum(1,5,67,6);

function sumOfArrayItems(array){
  let sum = 0;
  array.forEach(function (ar) {
      if (typeof ar === "number") {
          sum += ar
      } else {
          sum = `Array has one or more string type parameter.`
      }
  })
  console.log(sum);
}

sumOfArrayItems([1,2,3,4,"as"]);

function average(array){
  let av = 0;
  array.forEach(function (ar) {
      if (typeof ar === "number") {
          av += ar/(array.length)
;      } else {
          av = `Array has one or more string type parameter.`
      }
  })
  console.log(av);
}

average([1,2,3,4]);

function modifyArray(arr){
  if(arr.length<5){
    console.log("item not found");
  }else{
    arr[4]=arr[4].toUpperCase();
    console.log(arr);
    }
}

modifyArray([1,2,3,4,"THISONE"]);

function isPrime(num){
  let score = 0;
  for (i=2; i<num/2+1; i++){
    if(num%i == 0){
      score +=1;
    }
    if (score >= 1){
      console.log(`${num} is not prime`);
    }else{
      console.log(`${num} is prime`);
    }
 }
}
isPrime(7);

function isUnique(arr){
  const newarr = new Set(arr);
  if (newarr.size == arr.length){
    console.log(`Array parameters are unique.`)
  }else{
    console.log(`Array parameters are not unique.`)
  }
}

isUnique([1,2,3,4,5]);

function isSame(arr){
  let score = 0;
  for (let i=0; i<arr.length-1;i++){
    if (typeof(arr[i]) != typeof(arr[i+1])){
      score +=1
    }
  }
  if (score>=1){
    console.log(`items of the array are not the same data type`);
  }else{
    console.log(`items of the array are the same data type`);
  }
}

isSame([1, 2, 3, "type"]);

function isValidVariable(variable){
  let characters = [0,1,2,3,4,5,6,7,8,9,"q","w","e","r","t","y","u","o","p","a","s","d","f","g","h","j","l","i","z","x","c","v","b","n","m","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M","$","_"];
  let score = 0;
  for (let i=0; i<variable.length; i++){
    if((characters.includes(variable[i]))){
      score = score;
    }else{
      score +=1;
  }
  }
  if(score>=1){
    console.log(`${variable} is not valid.`);
  }else{
    console.log(`${variable} is valid.`);
  }
} 
isValidVariable(`$.`);


reverseCountries = () => {
  let countries = ["nigeria", "U.S.A", "italy", "canada", "lebanon"];
  console.log(countries.reverse());
}
reverseCountries();

function sevenRandomNumbers(){
  const arr = [];
  while(arr.length < 8){
    var r = Math.floor(Math.random() * 9) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
}
sevenRandomNumbers();