const catWeight = [];
const catsAPI = "https://api.thecatapi.com/v1/breeds";
fetch(catsAPI)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((cat) => {
      catWeight.push(
        `${cat.name}: ${
          (parseInt(cat.weight.metric[0]) + parseInt(cat.weight.metric[4])) / 2
        }`
      );
    });
  })
  .catch((error) => console.log(error));
console.log(catWeight);

const countriesAPI = "https://restcountries.com/v2/all";

const languageArr = [];
let largestCountries = {};
const fetchCountry = async () => {
  try {
    const response = await fetch(countriesAPI);
    const data = await response.json();
    countries = data;

    countries.forEach((country) => {
      for (let i = 0; i < country.languages.length; i++) {
        languageArr.push(country.languages[i].name);
      }
    });

    largestCountries = countries.sort(function (a, b) {
      if (a.area > b.area) return -1;
      if (a.area < b.area) return 1;
      return 0;
    });
  } catch (err) {
    console.log(err);
  }
  const languageSet = new Set(languageArr);
  console.log(`Total languages number of world is ${languageSet.size}`);
  console.log(largestCountries.splice(0, 9));
};
fetchCountry();
