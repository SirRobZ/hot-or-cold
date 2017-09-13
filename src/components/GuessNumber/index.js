import React from 'react';

import './GuessNumber.css'

export default function GuessNumber(props) {
  return (
    <p className="guess-number">
      Number of Guesses:<span id="count">{props.count}</span>!
    </p>
  );
}
