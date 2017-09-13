import React from 'react';

import _ from 'lodash';
import './header.css';

export default class Header extends React.Component {
  render() {
    const { toggleInfoModal } = this.props;

    return (
      <header>
        <div className="container">
          <div className="more-information">
            <button onClick={e => {
              if(_.isFunction(toggleInfoModal)){
                toggleInfoModal();
              }
            }}>WHAT?</button>
          </div>
          <div className="new-game">
            <button id="new-game-button">+NEW GAME</button>
          </div>
        </div>

      </header>
    );
  }

}
