let set = new Set();

for (let i = 0; i <= 10; i++) {
  set.add(i);
}
console.log(set);
set.delete(5);
set.clear();

let cities = ["Istanbul", "Izmir", "Rize", "Mersin", "Antalya"]
let citiesSet = new Set();
cities.forEach(city => {
    set.add(city)
})
console.log(citiesSet);

countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]
const map = new Map(countries)
console.log(map)
console.log(map.size)