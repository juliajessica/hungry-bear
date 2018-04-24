export let bear = { //bear variable: One advantage of this is that these prototypes are all tightly encapsulated within this single variable now. That wouldn’t be so helpful if we needed to make many bears in our application, but there’s only one, so this works just as well as using classes.
  foodLevel: 10,
  setHunger: function() {
    const hungerInterval = setInterval(() => { //arrow notation
      this.foodLevel--; //decrementing
      if (this.didYouGetEaten() === true) {
        clearInterval(hungerInterval);
        return "You got eaten!";
      }
    }, 1000);
  },
  didYouGetEaten: function() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  },
  feed: function(amount) {
    setInterval(() => {
      that.foodLevel += amount;
      if (this.foodLevel === true) {
        return 'The bear ate the ${food}! Food level goes up ${amount}!'
      }
    }, 1000);
  },
  //  = bear.feed(5);// creating a new property on the bear called eatSmall
  eatSmall: function(food) {
    this.foodLevel += 5
    return 'The bear ate the ${food}! Food level goes up 5!'
  }
}; // end of class



// export class HungryBear { //bear class

  // constructor(name) {
  //   this.name = name;
  //   this.foodLevel = 10;
  // }
  //
  // setHunger() {
  //   setInterval(() => { //arrow function: (callback) let this = that;
  //     this.foodLevel--; //decrementing food level
  //   }, 1000);
  // }
  //
  // didYouGetEaten() {
  //   if (this.foodLevel > 0) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  //
  // feed() {
  //   this.foodLevel = 10;
  // }
// } // end of class
