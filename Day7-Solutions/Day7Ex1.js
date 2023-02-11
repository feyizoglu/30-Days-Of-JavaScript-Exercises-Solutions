// function fullName(){
//   console.log("Tolgahan Feyizoğlu");
// }
// fullName();

function fullName(firstName, lastName){
  console.log(`${firstName} ${lastName}`);
}
fullName("Tolgahan", "Feyizoğlu");

function addNumbers(num1,num2){
  console.log(num1+num2);
}
addNumbers(3,5);

function areaOfRectangle(length,witdh){
  console.log(length*witdh);
}
areaOfRectangle(3,5);

function perimeterOfRectangle(length,witdh){
  console.log(2*(length+witdh));
}
perimeterOfRectangle(3,5);

function volumeOfRectPrism(length,witdh,height){
  console.log(height*length*witdh);
}
volumeOfRectPrism(3,5,8);

function areaOfCircle(r){
  console.log(Math.PI*r*r);
}
areaOfCircle(3);

function circumOfCircle(r){
  console.log(Math.PI*2*r);
}
circumOfCircle(3);

function density(mass,volume){
  console.log(mass/volume);
}
density(10,2);

function speed(distance,time){
  console.log(distance/time);
}
speed(200,2);

function weight(mass,gravity){
  console.log(mass*gravity);
}
speed(10,2);

function convertCelsiusToFahrenheit(oC){
  console.log((oC*9/5)+32);
}
convertCelsiusToFahrenheit(10);

function bodyMassIndex(weight,height){
  let bmi = weight/(height*height);
  if(bmi<18.5){
    console.log("Underweight");
  }else if(bmi<24.9){
    console.log("Normal weight");
  }else if(bmi<29.9){
    console.log("Overweight");
  }else{
    console.log("Obese");
  }
  
}

bodyMassIndex(90,1.8);

function checkSeason(month){
  if (month.toLowerCase() === "september" || month.toLowerCase() === "october" ||month.toLowerCase() === "november" ){
    console.log("Autumn");
  }else if (month.toLowerCase() === "march" || month.toLowerCase() === "april" ||month.toLowerCase() === "may" ){
    console.log("Spring");
  }else if (month.toLowerCase() === "june" || month.toLowerCase() === "july" ||month.toLowerCase() === "august" ){
    console.log("Summer");
  }else if (month.toLowerCase() === "december" || month.toLowerCase() === "january" ||month.toLowerCase() === "february" ){
    console.log("Winter");
  }
  else{
    console.log("It is not a month");
  }
}

checkSeason("november");

function findMax(a,b,c){
  if (a>b && a>c){
    console.log(`Maximum number is ${a}`);
  }else if (b>a && b>c){
    console.log(`Maximum number is ${b}`);
  }else if (c>b && c>a){
    console.log(`Maximum number is ${c}`);
  }
}

findMax(3,5,4);