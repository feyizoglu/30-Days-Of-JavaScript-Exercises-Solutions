import { countries } from './countries.js';

function howmanylanguages(arr) {
  const language = [];
   for(let i=0; i<arr.length; i++){
    for (let k=0; k<arr[i].languages.length; k++){
      language.push(arr[i].languages[k]);
    }
  }
  const langSet = new Set(language);
  console.log(langSet.size);
}
howmanylanguages(countries);

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

mostSpokenLanguages(countries,10);