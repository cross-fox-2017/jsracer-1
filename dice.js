"use strict"

class Dice {
  constructor() {
    this._dadu = 0;
  }
  roll() {
    this._dadu =  Math.ceil(Math.random()*6)
    return this._dadu;
  }
}

export default Dice
