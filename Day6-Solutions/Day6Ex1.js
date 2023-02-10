// for (let i=0; i<=10;i++){
//   console.log(i);
// }
// for (let i=10; i>=0;i--){
//   console.log(i);
// }

// let i=0;
// while(i<11){
//   console.log(i);
//   i++
// }
// let i=10;
// while(i>=0){
//   console.log(i);
//   i--;
// }

// let i=10;
// do{
//   console.log(i);
//   i--;
// }while(i>=0)

// let i=0;
// do{
//   console.log(i);
//   i++;
// }while(i<=10)

// // for (let i = 0; i < n; i++) {} 
// let total = "#";
// for (let i=1; i<8; i++){
//   console.log(total);
//   total+="#"
// }

// for (let i=0; i<11;i++){
//   console.log(`${i} x ${i} = ${i*i}`);
// }
// for (let i=0; i<11;i++){
//   console.log(`${i} ${i*i} ${i*i*i}`);
// }

// for (let i=0; i<101;i++){
//   if(i%2===0){
//   console.log(i);
// }
// }

// for (let i=0; i<101;i++){
//   if(i%2!==0){
//   console.log(i);
// }
// }



let total=0;
for (let i=0; i<101;i++){
  total+=i;
}
console.log(`The sum of all numbers from 0 to 100 is ${total}.`);

let total1=0;
let total2=0;
for (let i=0; i<101;i++){
  if (i%2===0){
    total1+=i;
  }else{
    total2+=i;
  }
  
}
console.log([total1,total2]);

// const arr=[];
// for (let i=0; i<5; i++){
//   arr.push(Math.floor(Math.random()*10));
// }
// console.log(arr);
// const arr=[];
// for (let i=0; arr.length<5; i++){
//   let random = Math.floor(Math.random()*10);
//   if(arr.indexOf(random) === -1){
//   arr.push(random);
// }
// }
// console.log(arr);

let random = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
let id = "";
for (let i=0; i<6;i++){
  let rand = Math.floor(Math.random()*random.length);
  id+=random[rand];
}
console.log(id);


