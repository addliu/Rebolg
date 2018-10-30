import React, { Component } from 'react';
import './App.css';
import WrappedNormalLoginForm from './login';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
          username: '',
          password: '',
      }
  }
  render() {
    return (
      <div className="App">
        <WrappedNormalLoginForm />
      </div>
    );
  }
}

export default App;
