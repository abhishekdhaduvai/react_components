import React, { Component } from 'react';
import StarRating from './Components/StarRating';

class App extends Component {
  render() {
    return (
      <div>
        <StarRating max={5}/>
      </div>
    );
  }
}

export default App;
