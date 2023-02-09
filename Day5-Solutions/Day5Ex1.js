const emptyArr = [];
const nums = [1,2,3,4,5,6,7];
console.log(nums.length);
console.log(nums[0]);
console.log(nums[3]);
console.log(nums[6]);
const mixedDataTypes = [true, 1, 2, "Facebook", {name: "Tolgahan"}, "Twitter" ];
console.log(mixedDataTypes.length);
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);
for (i=0; i<itCompanies.length;i++){
  console.log(itCompanies[i]);
};
for (i=0; i<itCompanies.length;i++){
  console.log(itCompanies[i].toUpperCase());
};
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are IT companies.`);

// let company = prompt("Enter the company name:");
// if (itCompanies.includes(company)){
//   console.log(company);
// }else{
//   console.log("not found")
// ;}

let oArr = [];
for (let i=0; i<itCompanies.length; i++){
  itCompanies[i].includes("oo")&& oArr.push(itCompanies[i]);
}
console.log(oArr);

console.log(itCompanies.sort());

console.log(itCompanies.reverse());
console.log(itCompanies.slice(0,3));
console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length));
console.log(itCompanies.slice(Math.floor(itCompanies.length/2),Math.floor(itCompanies.length/2)+1));
itCompanies.shift();
itCompanies.pop();
itCompanies.splice(Math.floor(itCompanies.length/2));
itCompanies.splice(0,2);
console.log(itCompanies);




