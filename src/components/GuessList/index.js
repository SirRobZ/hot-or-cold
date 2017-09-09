import React from 'react';

import './GuessList.css'

export default function GuessList(props) {
  const guesses = props.guesses.map((guess, index) => (
      <li key={index}>{guess}</li>
  ));

  return (
    <div className='guesses'>
      <ul>
        {guesses}
      </ul>
    </div>
  );
}
