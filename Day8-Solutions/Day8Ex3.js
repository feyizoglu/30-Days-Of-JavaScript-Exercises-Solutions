// const personAccount = {
//   firstName: "Tolgahan",
//   lastName: "Feyizoğlu",
//   incomes: {
//     betting: 2500,
//     robbery: 15000,
//   },
//   expenses:{
//     rent: 2000,
//     taxes: 2600,
//     food: 1500,
//     transportation: 1000,
//   },
//   totalIncome: function(){
//     let income = 0;
//     let values = Object.values(this.incomes);
//     for (let i = 0;i <values.length; i++){
//       income+=values[i];
//     }
//     return income;
//   },
//   totalExpense:function(){
//     let expense = 0;
//     let values = Object.values(this.expenses);
//     for (let i = 0;i <values.length; i++){
//       expense+=values[i];
//     }
//     return expense;
//   },

//   accountInfo: function () {
//     return `name:${this.firstName} ${this.lastName}\n
//             incomes:${Object.entries(this.income)}
//             expenses: ${
//                 Object.entries(this.expenses)
//             }
//             totalIncome: ${this.totalIncome()}
//             totalExpenses: ${this.totalExpenses()}
//             accountBalance: ${this.accountBalance()}
//             `
// },

// addIncome: function (key, value){
//   personAccount.incomes[key] = value;
// },
// addExpense:function(key,value){
//     return personAccount.expenses[key] = value;
// },
// accountBalance: function(){
//     return this.totalIncome() - this.totalExpenses();
// },
// }
// personAccount.addIncome("blabla", 5000);
// console.log(personAccount);

const users = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]


const signUp = (username, email, password) => {
  users.forEach(user => {
      if (user.username === username && user.password === password) {
          console.log("you already have an account")
      } else {
          let date = new Date()
          let chars = "abcdefghiklmnopqrstuvwxyz";
          let id = [];
          for (let i = 0; i < 6; i++) {
              id.push(chars[Math.floor(Math.random() * chars.length)])
          }
          id = id.join("");
          users.push({
              _id: id,
              username: username,
              email: email,
              password: password,
              createdAt: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
              isLoggedIn: "false"
          })
      }
  })
  console.log(users[users.length - 1]);
}
signUp("Martha","blabla@x.com", "123222" );

const signIn = (username, password) => {
  for (let i = 0; i < users.length; i++) {
      if (users[i].username.toLowerCase() === username.toLowerCase() && users[i].password === password) {
          return (users[i]);
      } else {
          return ("wrong username or password");
      }
  }
}
signIn("Martha","123222" );

const rateProduct = (name, rate) => {
  products.forEach(product => {
      if (product.name.toLowerCase().includes(name)) {
          let chars = "0123456789abcdefghiklmnopqrstuvwxyz";
          let id = [];
          for (let i = 0; i < 6; i++) {
              id.push(chars[Math.floor(Math.random() * chars.length)])
          }
          id = id.join("");
          product.ratings.push({
              userId: id,
              rate: rate
          })
          console.log("filter");
      } else {
          console.log("no product to rate")
      }
  })
};

const averageRating = (name) => {
  let avg = 0;
  let count = 0;
  for (let i = 0; i < products.length; i++) {
      if (name.toLowerCase() === products[i].name.toLowerCase()) {
          products[i].ratings.rate.forEach(rating => {
              count++
              avg += rating
          })
      }
  }
  avg = avg / count
};

const likeProduct = (name) => {
  for (let i = 0; i < products.length; i++) {
      if (name.toLowerCase() === products[i].name.toLowerCase()) {

          if (!products[i].likes) {
              console.log(like);
              let chars = "0123456789abcdefghiklmnopqrstuvwxyz";
              let id = [];
              for (let i = 0; i < 6; i++) {
                  id.push(chars[Math.floor(Math.random() * chars.length)])
              }
              id = id.join("");
              products[i].likes.push(id)
          } else {
              console.log("product has been liked")
          }
      } else {
          console.log("no product available")
      }
  }
};

rateProduct("tv", "4.5");
averageRating("mobile phone");
likeProduct("mobile phone");