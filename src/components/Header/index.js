import React from 'react';
import InfoModal from '../Infomodal'


import './header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfoModal: false
    };
  }

  toggleInfoModal() {
    this.setState({
      showInfoModal: !this.state.showInfoModal
    });
  }

  render() {
    let infoModal;
    if (this.state.showInfoModal) {
      infoModal = <InfoModal onClose={() => this.toggleInfoModal()}/>;
    }

    return (
      <header>
        <div className="container">
          <div className="more-information">
            <button onClick={e => {
              this.toggleInfoModal();
            }}>WHAT?</button>
          </div>
          <div className="new-game">
            <button onClick={e => {

            }}>+NEW GAME</button>
          </div>
        </div>
      </header>
    );
  }

}
