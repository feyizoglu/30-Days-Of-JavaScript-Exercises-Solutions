import { Animal } from "./Day15Ex1.js";

class Pet extends Animal {
  constructor (name, age, color, legs, species){
    super(name, age, color, legs)
    this.species = species;
  }
  animalVoice(){
    if (this.species == "dog"){
      return "wofwof"
    }else if(
      this.species == "cat"
    ){
      return "meow"
    }
  }
}

const pet1 = new Pet("cirkin,", 2, "white-black", 4, "cat");
console.log(pet1.species);
console.log(pet1.animalVoice());
