/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "purple",
  4,
  35,
  35,
  false
);
console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);

class Animals {
  constructor(
    name,
    species,
    color,
    collarOn,
    furType,
    fedBreakfast,
    fedDinner
  ) {
    this.name = name;
    this.species = species;
    this.color = color;
    this.collarOn = collarOn;
    this.furType = furType;
    this.fedMeal = {
      breakfast: fedBreakfast,
      dinner: fedDinner,
    };
  }

  toggleCollar(status) {
    this.collarOn = status;
  }

  updateMeal(fedBreakfast, fedDinner) {
    this.fedMeal.breakfast = fedBreakfast;
    this.fedMeal.dinner = fedDinner;
  }
}

const cade = new Animals(
  "Butthead",
  "Cat",
  "Black",
  true,
  "Floofy",
  true,
  false
);

console.log("The stupid Cade is:", cade)
console.log("He has been fed breakfast:", cade.fedMeal.breakfast)