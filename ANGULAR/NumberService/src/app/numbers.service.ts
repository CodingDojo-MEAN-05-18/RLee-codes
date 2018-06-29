import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  constructor() { }

  alphaArr: Array<number> = [];
  betaArr: Array<number> = [];
  gamma: number;

  alphaGen(): Array<number>{
    let alpha: Array<number> = [];
    let length: number = Math.floor(Math.random() * 15) + 3;
    for (let i = 0; i <= length; i++){
      alpha.push(Math.floor(Math.random() * 10));
    }
    this.alphaArr = alpha;
    return alpha;
  }

  betaGen(): Array<number> {
    let beta: Array<number> = [];
    let length: number = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i <= length; i++){
      beta.push(Math.floor(Math.random() * 10));
    }
    this.betaArr = beta;
    return beta;
  }

  gammaGen(): number {

    let alphaSum: number = 0;
    let betaSum: number = 0;
    for (let num of this.alphaArr) {
      alphaSum += num;
    }
    for (let num of this.betaArr) {
      betaSum += num;
    }
    this.gamma = (alphaSum - betaSum);
    return this.gamma;
  }
}
