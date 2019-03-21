import React, { Component, Children } from 'react';
import './App.css';
import Parent from './Parent';
import SlideShow from './SlideShow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SlideShow>
          <h6>this is a child</h6>
          <h6>this is a child</h6>
          <h6>this is a child</h6>
          <h6>this is a child</h6>
        </SlideShow>
      </div>
    );
  }
}

export default App;
