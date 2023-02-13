let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let union = [...a, ...b];

let C = new Set(union);

console.log(C);

let A = new Set(a);
let B = new Set(b);

let intersection = a.filter((num) => B.has(num));
let Dintersect = new Set(intersection);

console.log(Dintersect);