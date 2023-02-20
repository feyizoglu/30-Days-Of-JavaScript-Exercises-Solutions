const PersonAccount = {
  firstname: "Tolgahan",
  lastname: "Feyizoğlu",
  incomes: [3000, 500],
  expences: [1000, 2000],
  totalIncome() {
    let tIncome = 0;
    this.incomes.forEach((income) => (tIncome += income));
    return tIncome;
  },
  totalExpense() {
    let tExpenses = 0;
    this.expences.forEach((expense) => (tExpenses += expense));
    return tExpenses;
  },
  accountInfo() {
    return `
    Name: ${this.firstName} ${this.lastName}
    Income: ${this.totalIncome()}
    Expenses: ${this.totalExpenses()}`;
  },
  addIncome(amount) {
    this.incomes.push(amount);
  },
  addExpense(cost) {
    this.expenses.push(cost);
  },
  accountBalance() {
    let aBalance = this.totalIncome() - this.totalExpense();
    return aBalance;
  },
};
const PersonAccountText = JSON.stringify(PersonAccount, undefined, 3);
localStorage.clear();
localStorage.setItem("PersonAccount", PersonAccountText);
