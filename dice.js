"use strict"

class Dice {
  static roll() {
    return Math.floor(Math.random() * 6 + 1);
  }
}

export default Dice
//static: memanggil method tanpa harus membuat instansi class
