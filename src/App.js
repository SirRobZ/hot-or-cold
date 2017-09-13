import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header/';
import Footer from './components/Footer/';
import InfoModal from './components/Infomodal';
import './App.css';

class App extends Component {

  constructor(props){
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
    const { showInfoModal } = this.state;

    return (
      <div className="App">
        <Header toggleInfoModal={this.toggleInfoModal.bind(this)} />
        {this.props.children}
        <Footer />
        { showInfoModal && <InfoModal onClose={() => this.toggleInfoModal()} /> }
      </div>
    );
  }
}

export default App;
