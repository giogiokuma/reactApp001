import React, { Component } from 'react';


import './App.css';
import ContactList from './ContactList/ContactList'; 
import CommentForm from './CommentForm/CommentForm'; 
class App extends Component {
  state = {
    name: '',
    value: '',
  }
  textChangeHandler = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleChange = (event) => {
    this.setState({
      value:event.target.value
    })
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {

    return (
      <div className="App">
      <input type="text" onChange={this.textChangeHandler} />
      <ContactList str={this.state.name} />

      {/*<input type="text" onChange={} />*/}
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submmit" />
      </form>
      </div>
      
    );
  }
}

export default App;
