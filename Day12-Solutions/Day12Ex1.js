let sentence = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const arr = sentence.match(/\d{4,}/g);
console.log(arr);
console.log(`He earns ${12*(parseInt(arr[0])+parseInt(arr[2]))+parseInt(arr[1])} for a year.`);


let text = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction"
let sortingPoint = text.match(/(-\d+)|(\d+)/g);
sortingPoint = sortingPoint.map((elements) => {
    return Number(elements)
})
console.log(sortingPoint);
console.log(`The distance is ${parseInt(sortingPoint[sortingPoint.length-1])-parseInt(sortingPoint[0])}.`);

function is_valid_variable(str){
  console.log(!(/^\d|-/).test(str));
}

is_valid_variable('first_name')// True
is_valid_variable('first-name') // False
is_valid_variable('1first_name') // False
is_valid_variable('firstname') // True