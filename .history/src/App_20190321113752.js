import React, { Component, Children } from 'react';
import './App.css';
import Parent from './Parent';
import SlideShow from './SlideShow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SlideShow>
          <h6>this is a child 1</h6>
          <h6>this is a child 2</h6>
          <h6>this is a child 3</h6>
          <h6>this is a child 4</h6>
        </SlideShow>
      </div>
    );
  }
}

export default App;
