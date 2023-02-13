import { countries } from './countries.js';

// const newCountries = countries.sort(function(a, b){
//   if (a.name < b.name) return -1
//   if (a.name > b.name) return 1
//   return 0
// });
// console.log(newCountries);

// const newCountries2 = countries.sort(function(a, b){
//   if (a.capital < b.capital) return -1
//   if (a.capital > b.capital) return 1
//   return 0
// });
// console.log(newCountries2);

// const newCountries2 = countries.sort(function(a, b){
//   if (a.population< b.population) return -1
//   if (a.population > b.population) return 1
//   return 0
// });
// console.log(newCountries2);

function mostSpokenLanguages(arr,num) {
  const language = [];
   for(let i=0; i<arr.length; i++){
    for (let k=0; k<arr[i].languages.length; k++){
      language.push(arr[i].languages[k]);
    }
  }
  const langSet = new Set(language);

  const counts = []
  const count = {}

  for (const l of langSet) {
    const filteredLang = language.filter((lng) => lng === l)
    counts.push({ lang: l, count: filteredLang.length })
  }
  const newCountries = counts.sort(function(a, b){
  if (a.count> b.count) return -1
  if (a.count< b.count) return 1
  return 0
});
console.log(newCountries.splice(0,num));

}
mostSpokenLanguages(countries,3);

function mostPopulatedCountries(arr,num) {

  const newCountries = arr.sort(function(a, b){
  if (a.population> b.population) return -1
  if (a.population< b.population) return 1
  return 0
});
console.log(newCountries.splice(0,num));

}
mostPopulatedCountries(countries,5);


const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

const statistics = {
  sum: function(arr){
    let sum=0;
    for (let i=0; i<arr.length;i++){
      sum+=arr[i];
    }
    return sum;
  },
  count: function(arr){
    return arr.length;
  },
  min: function(arr){
    return Math.min(...arr);
  },
  max: function(arr){
    return Math.max(...arr);
  },
  range: function(arr){
    return Math.max(...arr)-Math.min(...arr);
  },
  mean: function(arr){
    let sum=0;
    for (let i=0; i<arr.length;i++){
      sum+=arr[i];
    }
    return Math.ceil(sum/(arr.length));
  },
  median: function(arr){
    const newArr = arr.sort(function (a, b) {
      return a - b
    })
    return newArr[Math.floor(arr.length/2)];
  },
  mode: function(arr){
    const mode = {};
    let max = 0, count = 0;
  
    for(let i = 0; i < arr.length; i++) {
      const item = arr[i];
      
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
  },
  var: function(arr){
    const mode = {};
    let max = 0, count = 0;
  
    for(let i = 0; i < arr.length; i++) {
      const sum = arr.reduce((acc, val) => acc + val);
      const { length: num } = arr;
      const median = sum / num;
      let variance = 0;
      arr.forEach(num => {
         variance += ((num - median) * (num - median));
      });
      variance /= num;
      return variance;
   };
  },
  std: function(arr){
    return Math.sqrt(this.sum(arr)/(arr.length))
   },
  }

console.log('Sum:', statistics.sum(ages));
console.log('Count:', statistics.count(ages));
console.log('Min:', statistics.min(ages));
console.log('Max:', statistics.max(ages));
console.log('Range:', statistics.range(ages));
console.log('Mean:', statistics.mean(ages));
console.log('Median:', statistics.median(ages));
console.log('Mode:', statistics.mode(ages));
console.log('Variance:', statistics.var(ages));
console.log('Standart Deviation', statistics.std(ages));