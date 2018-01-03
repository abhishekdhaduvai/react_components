import React, { Component } from 'react';
import StarRating from './Components/StarRating';
import Timestamp from './Components/Timestamp';
import NavBar from './Components/NavBar';

class App extends Component {

  state = {
    navItems: [{
      "label": "Home",
      "id": "home",
      "icon": "home"
    }, {
      "label": "Alerts",
      "id": "alerts",
      "icon": "exclamation-triangle"
    }, {
      "label": "Assets",
      "id": "assets",
      "icon": "linode"
    }, {
      "label": "Dashboards",
      "id": "dashboards",
      "icon": "tachometer"
    }]
  }

  render() {
    const { navItems } = this.state;
    return (
      <div>
        <div>
          <NavBar vertical={false} items={navItems}/>
        </div>
        <div />
        <div>
          <h2>Star Rating</h2>
          <StarRating max={5}/>
        </div>
        <div>
          <h2>Timestamp</h2>
          Posted <Timestamp time={1513287936000} />
        </div>
      </div>
    );
  }
}

export default App;
