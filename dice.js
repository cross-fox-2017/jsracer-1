"use strict"

class Dice {
  constructor() {

  }
  roll() {
    var random = Math.floor(Math.random() * 6) + 1
    return random
  }
}

export default Dice
