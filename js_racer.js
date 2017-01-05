"use strict"



export class player {
  constructor(codeName,posEnd, track) {
    this.codeName= codeName
    this.posEnd = posEnd
    this.track= track
  }
  get nama(){
    return this.codeName
  }
  get pos(){
    return this.posEnd
  }
  get trek(){
    return this.track
  }
  set trek(val){
    this.track=val
  }
  set pos(val){
    this.posEnd=val
  }
}
