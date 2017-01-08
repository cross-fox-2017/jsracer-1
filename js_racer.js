"use strict";


import Dice from "./dice.js";

class JSRacer {
    constructor(players, length) {
        this._player = players;
        this._length = length,
        this._papan = [];
        this._nilai = [];
    }

    print_board() {
        for (var i = 0; i < this._player; i++) {
            var lintasan = []
            for (var j = 0; j < this._length; j++) {
                lintasan.push("--")
            }
            this._papan.push(lintasan)
        }
    }

    print_player() {
        var pemain = 65
        for (var i = 0; i < this._player; i++) {
            this._nilai.push(0)
            var namapemain = String.fromCharCode(pemain + i)
            this._papan[i][0] = namapemain;
        }
    }

    play() {
        var nilaiPemain = this._nilai;
        var papan = this._papan;
        var pemain = this._player
        var dice = new Dice();
        var dadu = dice.roll();
        var tampung = -1;
        var panjanglintasan = this._length - 1;

        var waktu = setInterval(function() {
            var nilaiMax = nilaiPemain.reduce((a, b) => {
                return Math.max(a, b)
            })
            if (nilaiMax >= panjanglintasan) {
                var namaPemenang = nilaiPemain.indexOf(nilaiMax)
                console.log(`Pemenangnya Adalah ${String.fromCharCode(65+namaPemenang)}`);
                clearInterval(waktu)
            } else {
                race.reset_board()
                if (tampung == pemain) {
                    if (nilaiMax >= panjanglintasan) {
                        var namaPemenang = nilaiPemain.indexOf(nilaiMax)
                        console.log(`Pemenangnya Adalah ${String.fromCharCode(65+namaPemenang)}`);
                        clearInterval(waktu)
                    } else {
                        tampung = 0;
                        console.log(`Pemain ${String.fromCharCode(65+tampung)} Jalan`);
                        papan[tampung][nilaiPemain[tampung]] = "--";
                        nilaiPemain[tampung] = (nilaiPemain[tampung] += dadu)
                        if (nilaiPemain[tampung] >= panjanglintasan) {
                            papan[tampung][panjanglintasan] = String.fromCharCode(65 + tampung)
                        } else {
                            papan[tampung][nilaiPemain[tampung]] = String.fromCharCode(65 + tampung)
                        }

                        console.log(papan);
                        tampung++
                        dadu = dice.roll();
                    }
                } else if (tampung == -1) {
                    console.log(papan);
                    tampung++
                } else {
                    if (nilaiMax >= panjanglintasan) {
                        var namaPemenang = nilaiPemain.indexOf(nilaiMax)
                        console.log(`Pemenangnya Adalah ${String.fromCharCode(65+namaPemenang)}`);
                        clearInterval(waktu)
                    } else {
                        console.log(`Pemain ${String.fromCharCode(65+tampung)} Jalan`);
                        papan[tampung][nilaiPemain[tampung]] = "--";
                        nilaiPemain[tampung] = (nilaiPemain[tampung] += dadu)
                        if (nilaiPemain[tampung] >= panjanglintasan) {
                            papan[tampung][panjanglintasan] = String.fromCharCode(65 + tampung)
                        } else {
                            papan[tampung][nilaiPemain[tampung]] = String.fromCharCode(65 + tampung)
                        }
                        console.log(papan);
                        tampung++
                        dadu = dice.roll();
                    }
                }
            }
        }, 2000)

    }
    reset_board() {
        console.log("\x1B[2J")
    }
}

var race = new JSRacer()


export default JSRacer

// var game = new JSRacer(4, 12)
// game.print_board();
// game.print_player();
// game.play();


//https://gist.github.com/DTrejo/901104  rl.close() for es2015
