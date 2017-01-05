"use strict"

class Dice {
  constructor(sides) {
    this.sides = sides
  }
  roll() {
    return Math.Ceil(Math.random()*sides)
  }
}

export default Dice
