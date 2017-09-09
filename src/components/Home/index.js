import React from 'react';
import GameBox from '../GameBox';

import './Home.css'

export default class Home extends React.Component{


  render () {
    return (
      <div className="home-container">
        <h1>Hot or Cold</h1>
        <GameBox />
      </div>
    );
  }
}
