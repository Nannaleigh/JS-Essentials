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

export default Animals;
