import _ from 'lodash';

let currentCorrectNumber = 0;

export const GUESS_RANGES = {
  unAnswered: -2,
  invalid: -1,
  correct: 0,
  veryHot: 10,
  hot: 25,
  cold: 50,
  veryCold: 99,
}

const guessGame = {
  get initiated(){
    return currentCorrectNumber > 0;
  },
  evaluate,
  newGame,
};

function newGame(){
  currentCorrectNumber = Math.floor(Math.random() * 100) + 1;
}

function evaluate(guessNumber){
  if(!_.isNumber(guessNumber) || guessNumber < 1 || guessNumber > 100){
    return GUESS_RANGES.invalid;
  }

  const diff = Math.abs(currentCorrectNumber - guessNumber);

  if(diff === GUESS_RANGES.correct){
    return GUESS_RANGES.correct;
  }
  if(diff <= GUESS_RANGES.veryHot){
    return GUESS_RANGES.veryHot;
  }
  if(diff <= GUESS_RANGES.hot){
    return GUESS_RANGES.hot;
  }
  if(diff <= GUESS_RANGES.cold){
    return GUESS_RANGES.cold;
  }
  if(diff <= GUESS_RANGES.veryCold){
    return GUESS_RANGES.veryCold;
  }
}


export { guessGame as default };
