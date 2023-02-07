let firstName = "Tolgahan";
let lastName = "Feyizoğlu";
let country = "Turkey";
let city = "Ankara";
let age = 28;
let isMarried = false;
let year = 2022;
console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year)); //Question 1

if ('10' === 10){
    console.log(true);
}else{console.log(false)} // Question 2

if (parseInt('9.8') == 10){
    console.log(true);
}else{console.log(false)} // Question 3

//'0'
//'false'
//{} Truty Values

//0
//""
//null  Falsy Values  Question 4


//4 > 3 true
//4 >= 3 true
//4 < 3 false
//4 <= 3 false
//4 == 4 true
//4 === 4 true
//4 != 4 false
//4 !== 4 false
//4 != '4' true
//4 == '4' true
//4 === '4' false
console.log('python'.length =! 'jargon'.length); //Question 5
console.log('Q6');
console.log(4 > 3 && 10 < 12); //4 > 3 && 10 < 12 true
console.log(4 > 3 && 10 > 12); //4 > 3 && 10 > 12 false
console.log(4 > 3 || 10 < 12); //4 > 3 || 10 < 12 true
console.log(4 > 3 || 10 > 12); //4 > 3 || 10 > 12 true
console.log(!(4 > 3)); //!(4 > 3) false
console.log(!(4 < 3)); //!(4 < 3) true
console.log(!(false)); //!(false) true
console.log(!(4 > 3 && 10 < 12)); //!(4 > 3 && 10 < 12) false
console.log(!(4 > 3 && 10 > 12)); //!(4 > 3 && 10 > 12) true
console.log(!(4 === '4')); //!(4 === '4') true
console.log('dragon'.includes('on') && 'python'.includes('on') );

let now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth()+1);
console.log(now);
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime()/1000); //Question 7


