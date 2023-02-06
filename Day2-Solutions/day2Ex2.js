console.log ("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);
let number = 10;
if (number === 10 ){
    console.log(true);
}
else {
    number = 10;
}

let num2 = '9.8';
if (parseFloat(num2)== 10){
    console.log(true);
}
else {
    let num2 = parseFloat(9.8);
    console.log(false);
}

if ("python".indexOf("on") && "jargon".indexOf("on")) {
    console.log(true);
}
let num3 = Math.random()*100;
console.log(num3);

let num4 = 50 + Math.random()*50;
console.log(num4);

let num5 = Math.random()*255;
console.log(num3);

let num6 = parseInt(Math.random()*10);
console.log('JavaScript'[num6]);

console.log(`1 1 1 1\n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64\n5 1 5 25 125`);

let str = 'You cannot end a sentence with because because because is a conjunction';
console.log(str.substr(31,23));