import React from 'react';

import './GuessNumber.css'

export default function GuessNumber(props) {
  return (
    <p>
      Number of Guesses:<span id="count">{props.count}</span>!
    </p>
  );
}
