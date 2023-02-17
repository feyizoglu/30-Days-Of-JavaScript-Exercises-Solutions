import { countries } from './countries.js';

console.table(countries);
console.table(countries[0].languages);

console.group('Countries')
console.log(countries)
console.groupEnd()

