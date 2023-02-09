//Q1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
let maxValue = ages[ages.length-1];
let minValue = ages[0];
let midValue = ages[Math.floor((ages.length-1)/2)];

console.log(minValue);
console.log(maxValue);
console.log(midValue);
let total = 0;
for (let i=0; i<ages.length; i++){
  total+= ages[i];
}
let average = total/ages.length;
console.log(average);
console.log(maxValue-minValue);

console.log(Math.abs(minValue-average) > Math.abs(maxValue-average) );
