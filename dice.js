"use strict"

export function move(players){
    var a= Math.floor((Math.random()*6)+1);
    if(players.pos+a>29){
      players.trek.splice(29,1,players.nama);
      players.trek.splice(players.pos,1," ")
      players.pos=29
    }
    else{
      players.trek.splice(a+players.pos,1,players.nama);
      players.trek.splice(players.pos,1," ")
      players.pos= a+players.pos;
    }
      return players.trek.join('|')
}
