//Question 1
// let base = parseInt(prompt("Enter Base"));
// let height = parseInt(prompt("Enter Height"));

// console.log(`The area of the triangle is ${base*height*0.5}`); 

//Q2

// let a = parseInt(prompt("Enter a"));
// let b = parseInt(prompt("Enter b"));
// let c = parseInt(prompt("Enter c"));
// console.log(`The perimeter of the triangle is ${a+b+c}`); 


//Q3

// let length = parseInt(prompt("Enter length:"));
// let width = parseInt(prompt("Enter width:"));

// console.log(`Area of rectangle is ${length*width} and perimeter of rectangle is ${2*(length+width)}`);

//Q4

// let radius = parseInt(prompt("Enter radius:"));
// console.log(`Area of circle is ${radius*radius*Math.PI} and circumference of rectangle is ${2*Math.PI*radius}`);


//Q5

// let xInt = parseInt(prompt("x-intercept:"));
// let yInt = 2*xInt-2;
// let slope1 = xInt/yInt;
// console.log(`Slope is: ${slope1}`);

//Q6

// let [x1, x2, y1, y2] = [2, 6, 2, 10];
// let slope2 = (y2-y1)/(x2-x1);
// console.log(slope2);

//Q7

// console.log(slope1<slope2);

//Q8

// let x = prompt("enter x value:");
// let y = x*x+6*x+9;

// console.log(y); //-3

//Q9

// let hours = prompt("enter working hours:");
// let rate = prompt("enter rate per hour");

// console.log(`${hours*rate}`);

//Q10

// let name = prompt("Enter your name:");
// if (name.length > 7){
//   console.log("Your name is long")
// }else{
// console.log("Your name is short")
// }

//Q11

// let firstName = prompt("Enter your name:");
// let lastName = prompt("Enter your surname:");

// if(firstName>lastName){
//   console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}.`)
// }else{
//   console.log(`Your first name, ${firstName} is not longer than your family name, ${lastName}.`)
// }

//Q12

// let myAge = 35;
// let yourAge = 25;

// console.log(`I am ${myAge-yourAge} years older than you.`)

//Q13

// let age = prompt("Enter your age:");

// if (age>=18 ?
//   console.log(`You are ${age}. You are old enough to drive`)
//   :
//   console.log(`You are ${age}. You will be allowed to drive after ${18-age} years.`));

//Q14

// let years = prompt(`Enter number of years you live:`);
// console.log(`You lived ${years*365*24*60*60} seconds.`);

//Q15
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDay();
let hour = now.getHours();
let minute = now.getMinutes();

console.log(`${year}-${month}-${day} ${hour}:${minute}`);
console.log(`${day}-${month}-${year} ${hour}:${minute}`);
console.log(`${day}/${month}/${year} ${hour}:${minute}`);

