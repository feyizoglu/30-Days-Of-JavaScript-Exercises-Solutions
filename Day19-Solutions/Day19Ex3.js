function personAccount() {
  let firstname = "Tolgahan";
  let lastname = "Feyizoğlu";
  let incomes = [6000, 3000];
  let expenses = [3000, 4000];

  function totalIncome() {
    let total = 0;
    for (income of incomes) {
      total += income;
    }
    return total;
  }
  function totalexpense() {
    let total = 0;
    for (expense of expenses) {
      total += expense;
    }
    return total;
  }
  function accountInfo() {
    return `
  Name: ${firstname} ${lastname}
  Income: ${totalIncome()}
  Expenses: ${totalexpense()}`;
  }
  function addIncome(amount) {
    incomes += amount;
    return incomes;
  }
  function addExpense(cost) {
    expenses += cost;
    return expenses;
  }
  function accountBalance() {
    let aBalance = totalIncome() - totalexpense();
    return aBalance;
  }
  return {
    totalIncome: totalIncome(),
    totalexpense: totalexpense(),
    accountInfo: accountInfo(),
    addIncome: addIncome(),
    addExpense: addExpense(),
    accountBalance: accountBalance(),
  };
}

const account = personAccount();
console.log(account.totalIncome);
console.log(account.totalexpense);
console.log(account.accountInfo);
