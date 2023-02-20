const catNames = [];
const catsAPI = "https://api.thecatapi.com/v1/breeds";
fetch(catsAPI)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((cat) => {
      catNames.push(cat.name);
    });
  })
  .catch((error) => console.log(error));
console.log(catNames);
