import React, { Component } from 'react';
import StarRating from './Components/StarRating';
import Timestamp from './Components/Timestamp';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Star Rating</h2>
          <StarRating max={5}/>
        </div>
        <div>
          <h2>Timestamp</h2>
          Posted <Timestamp time={1513287936000} />
        </div>
        <div>
          <h2>AlertMessage</h2>
          {/* <AlertMessage type="information" title="Well done!" message="You successfully completed a difficult task."/> */}
        </div>
      </div>
    );
  }
}

export default App;
