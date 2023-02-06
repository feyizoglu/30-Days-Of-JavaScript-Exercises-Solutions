let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(love.toLocaleLowerCase().match(/love/g).length); // counting of 'love' word.

let string = 'You cannot end a sentence with because because because is a conjunction'
console.log(string.match(/because/g).length); // counting of 'because' word.

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

console.log(sentence.replace(/%|@|&|#|\$|;/g,'')); //clear the sentence

let income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let incArr = income.split(" ");
let nums = [];
for (let i=0; i < incArr.length; i++){
    if (incArr[i] == "euro"){
    nums.push(i);
}
}
console.log(nums);
let [salary, bonus, courses] = [incArr[[nums[0]-1]], incArr[[nums[1]-1]], incArr[[nums[2]-1]]];
let annualIncome = parseInt(salary*12)+parseInt(bonus)+parseInt(courses*12);
console.log(`This man earns ${annualIncome} euro per year.`); //total income.


