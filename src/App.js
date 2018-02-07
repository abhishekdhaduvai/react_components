import React, { Component } from 'react';
import StarRating from './Components/StarRating';
import Timestamp from './Components/Timestamp';
import Card from './Components/Card';

class App extends Component {

  render() {

    return (
      <div>
        <Card icon={"linode"} headerText={"Sample Card"} >
          <div>
            <h2>Star Rating</h2>
            <StarRating max={5}/>
          </div>
          <div>
            <h2>Timestamp</h2>
            Posted <Timestamp time={1513287936000} />
          </div>
        </Card>
      </div>
    );
  }
}

export default App;
