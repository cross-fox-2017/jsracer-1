"use strict"

class Dice {
  constructor() {

  }
  static roll() {
  	this.num = Math.floor(Math.random() *6)+1;
    return this.num;
  }
}
export default Dice
