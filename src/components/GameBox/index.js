import React from 'react';
import GuessForm from '../GuessForm';
import GuessNumber from '../GuessNumber';
import GuessList from '../GuessList';
import guessGame, {GUESS_RANGES} from '../../utils/guess-game';
import './gamebox.css';

export default class GameBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userRange: GUESS_RANGES.unAnswered,
      answer: Math.floor(Math.random() * 100) + 1,
      guesses: [],
      feedback: 'Guess a number between 1 and 100'
    };
  }

  newGame() {
    this.setState({
      userRange: GUESS_RANGES.unAnswered,
      answer: Math.floor(Math.random() * 100) + 1,
      guesses: [],
      feedback: 'Guess a number between 1 and 100'
    });
  }

  componentDidMount() {
    if (!guessGame.initiated) {
      guessGame.newGame();
    }
  }

  guessEval = (guess) => {
    const userRange = guessGame.evaluate(guess);
    this.setState({
      userRange,
      guesses: [...this.state.guesses, guess]});
  };

  renderFeedback() {
    const {userRange} = this.state;
    return ((userRange === GUESS_RANGES.unAnswered) && (
      <span>Guess a number between 1 and 100</span>
    ) || (userRange === GUESS_RANGES.invalid) && (
      <span>Please enter a NUMBER between 1 and 100</span>
    ) || (userRange === GUESS_RANGES.correct) && (
      <span>You Win!</span>
    ) || (userRange === GUESS_RANGES.veryHot) && (
      <span>Very Hot</span>
    ) || (userRange === GUESS_RANGES.hot) && (
      <span>hot</span>
    ) || (userRange === GUESS_RANGES.cold) && (
      <span>cold</span>
    ) || (userRange === GUESS_RANGES.veryCold) && (
      <span>very cold</span>
    ));
  }

  render() {
    return (
      <div className="home-container">
        <div className="header-row">
          {this.renderFeedback()}
        </div>
        <div className="guess-row">
          <GuessForm onSubmit={this.guessEval}/>
          <GuessNumber count={this.state.guesses.length}/>
        </div>
        <div className="guess-history-row">
          <GuessList guesses={this.state.guesses}/>
        </div>
      </div>
    );
  }
}
