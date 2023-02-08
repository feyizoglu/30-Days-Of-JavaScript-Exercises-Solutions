let year = prompt("Enter the year:");
let month = prompt("Enter the month:");

if (month=="February"){
  if (year%4 == 0){
    console.log(`${month} has 29 days.`)
  }else{
    console.log(`${month} has 28 days.`)
  }
}else if(month=="January" || month=="March" || month=="May" ||month=="July" ||month=="August" ||month=="October" ||month=="December"){
  console.log(`${month} has 31 days.`)
}else if(month=="April" || month=="June" || month=="September" || month=="November"){
  console.log(`${month} has 30 days.`)
}
