const countriesAPI = "https://restcountries.com/v2/all";
const fetchCountry = async () => {
  try {
    const response = await fetch(countriesAPI);
    const data = await response.json();
    countries = data;

    countries.forEach((country) => {
      const languageArr = [];
      for (let i = 0; i < country.languages.length; i++) {
        languageArr.push(country.languages[i].name);
      }
      console.log(
        `country:${country.name}, capital:${country.capital}, languages:${languageArr}, population${country.population}`
      );
    });
  } catch (err) {
    console.log(err);
  }
};
fetchCountry();
