//Q1
// let score = prompt("Enter your exam score:");

// if (score >=90 ){
//   console.log("A");
// }else if(score >=70 ){
//   console.log("B");
// }else if(score >=60 ){
//   console.log("C");
// }else if(score >=50 ){
//   console.log("D");
// }else{
//   console.log("E");
// }

//Q2

// let month = prompt("Enter the month:");

// if (month === "September" || month === "October" ||month === "November"){
//   console.log("Autumn");
// }else if(month === "December" || month === "January" ||month === "February"){
//   console.log("Winter");
// }else if(month === "March" || month === "April" ||month === "May"){
//   console.log("Spring");
// }else if(month === "June" || month === "July" ||month === "August"){
//   console.log("Summer");
// }else {console.log("There is something wrong!")}

//Q3

let day = prompt("Enter the day:").toLowerCase();

if(day == "monday" || day == "tuesday" ||day == "wednesday" ||day == "thursday" ||day == "friday"){
  console.log(`${day} is a working day`);
}else if(day == "saturday" ||day == "sunday"){
  console.log(`${day} is a weekend`);
}else {console.log("There is something wrong")}

