class Statistics {
  constructor(arr){
    this.arr = arr;
  }
  sum(){
    let sum=0;
    for (let i=0; i<this.arr.length;i++){
      sum+=this.arr[i];
    }
    return sum;
  }
  count ()  {
    return this.arr.length;
  }
  min () {
    return Math.min(...this.arr);
  }
  max () {
    return Math.max(...this.arr);
  }
  range (){
    return Math.max(...this.arr)-Math.min(...this.arr);
  }
  mean() {
    let sum=0;
    for (let i=0; i<this.arr.length;i++){
      sum+=this.arr[i];
    }
    return Math.ceil(sum/(this.arr.length));
  }
  median () {
    const newArr = this.arr.sort(function (a, b) {
      return a - b
    })
    return newArr[Math.floor(this.arr.length/2)];
  }
  mode () {
    const mode = {};
    let max = 0, count = 0;
  
    for(let i = 0; i < this.arr.length; i++) {
      const item = this.arr[i];
      
      if(mode[item]) {
        mode[item]++;
      } else {
        mode[item] = 1;
      }
      
      if(count < mode[item]) {
        max = item;
        count = mode[item];
      }
    }
     
    return max;
  }
  variance () {
    const mode = {};
    let max = 0, count = 0;
  
    for(let i = 0; i < this.arr.length; i++) {
      const sum = this.arr.reduce((acc, val) => acc + val);
      const { length: num } = this.arr;
      const median = sum / num;
      let variance = 0;
      this.arr.forEach(num => {
         variance += ((num - median) * (num - median));
      });
      variance /= num;
      return variance;
   };
  }
  std() {
    return Math.sqrt(this.sum(this.arr)/(this.arr.length))
  }
  describe() {
    return `
    Count: ${this.count()}\n
    Sum: ${this.sum()}\n 
    Min: ${this.min()}\n
    Max: ${this.max()}\n
    Range: ${this.range()}\n
    Mean: ${this.mean()}\n
    Median: ${this.median()}\n
    Mode: ${this.mode()}\n
    Variance: ${this.variance()}\n
    Standard Deviation: ${this.std()}`
}
}

let ages = new Statistics([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]);

console.log(ages.describe());


class PersonAccount {
  constructor(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    this.incomes = [];
    this.expenses = []
  }
  totalIncome(){
    let tIncome = 0;
        this.incomes.forEach(income => tIncome += income)
        return tIncome
  }
  totalExpense(){
    let tExpenses = 0;
    this.expenses.forEach(expense => tExpenses += expense)
    return tExpenses;
  }
  accountInfo(){
    return `
    Name: ${this.firstName} ${this.lastName}
    Income: ${this.totalIncome()}
    Expenses: ${this.totalExpenses()}`
  }
  addIncome(amount){
    this.incomes.push(amount)
  }
  addExpense(cost){
    this.expenses.push(cost)
  }
  accountBalance(){
    let aBalance = this.totalIncome()-this.totalExpense()
    return aBalance;
  }
}

let user1 = new PersonAccount("Tolgahan", "Feyizoğlu");
console.log(user1);
console.log(user1.totalExpense());
user1.addIncome(50);
console.log(user1.totalIncome());
console.log(user1.accountBalance());

