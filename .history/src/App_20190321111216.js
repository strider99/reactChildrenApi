import React, { Component } from 'react';
import './App.css';
import Parent from './Parent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Parent>
          <h6>this is a child</h6>
          <h6>this is a child</h6>
          <h6>this is a child</h6>
          <h6>this is a child</h6>
        </Parent>
      </div>
    );
  }
}

export default App;
