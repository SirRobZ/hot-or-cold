import React from 'react';
import _ from 'lodash';
import './GuessForm.css'


export default class GuessForm extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      guessNumber: 0,
    };
  }

  onChange = (e) => {
    const guessNumber =  _.parseInt(e.target.value);
    if(!_.isNaN(guessNumber)){
      this.setState({
        guessNumber,
      });
    }
  };

  onSubmit = (e) => {
    const { onSubmit } = this.props;
    e.preventDefault();
    if(_.isFunction(onSubmit)){
      onSubmit(this.state.guessNumber);
    }
  };

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <input type='number' className='text-input' placeholder='Enter your Guess' onChange={this.onChange}></input>
        <button type='submit' className='submit-button'>Guess</button>
      </form>
    )
  }
}
