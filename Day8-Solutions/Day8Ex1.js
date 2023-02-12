const dog = {};
console.log(dog);
dog["name"] = "Misha";
dog["legs"] = 4;
dog["color"] = "white";
dog["age"] = 3;
dog.bark = function(){
  console.log(`woof woof`)
}
dog.bark();

console.log(Object.values(dog));
dog.breed = "terrier";
dog.getDogInfo = function () {
  console.log(Object.values(this));
}