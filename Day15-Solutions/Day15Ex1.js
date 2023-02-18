export class Animal {
  constructor(name, age, color, legs){
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  animalInfo () {
    return `This animal's name is ${this.name}. It is ${this.age} years old. Its skin is ${this.color} and as you know it has ${this.legs} legs.`
  };
  get getName(){
    return this.name;
  };
  set setAge(age){
    this.age += age;
  }
};

const animal1 = new Animal("Misha", 3, "white", 4);
console.log(animal1.animalInfo());
console.log(animal1.getName);
animal1.setAge = 2;
console.log(animal1.age);

class Cat extends Animal {
  getChild() {
    return `I am a cat and I am an animal like dog.`
  }
}
class Dog extends Animal {
  getChild() {
    return `I am a dog and I am an animal like cat.`
  }
}
const cat1 = new Cat("Cokgoz",3,"brown",4);
const dog1 = new Dog("Balgoz", 4, "yellow", 4);

console.log(cat1.getChild());
console.log(dog1.getChild());
