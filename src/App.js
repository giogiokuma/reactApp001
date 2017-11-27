import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
class App extends Component {
  state = {
    userout: ''
  }
  textChangeHandler = (event) => {
    this.setState({
      userout: event.target.value
    })
  }

  render() {
    const style = {
      display:'inline-block',
      padding:'16px',
      textAlign:'center',
      margin:'16px',
      border:'1px solid black'
    };
    return (
      <div className="App">

        <input type="text"
          onChange={this.textChangeHandler}
          value={this.state.userout} /> 
        <p>{this.state.userout}</p>
        <Validation inputLength={this.state.userout.length} />
      </div>
    );
  }
}

export default App;
