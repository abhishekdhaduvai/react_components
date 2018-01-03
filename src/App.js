import React, { Component } from 'react';
import StarRating from './Components/StarRating';
import Timestamp from './Components/Timestamp';
import NavBar from './Components/NavBar';
import Card from './Components/Card';

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
          <h2>Star Rating</h2>
          <StarRating max={5}/>
        </div>
        <div>
          <h2>Timestamp</h2>
          Posted <Timestamp time={1513287936000} />
        </div>
        <div>
          <NavBar vertical={false} items={navItems}/>
        </div>
        <Card icon={"linode"} headerText={"Sample Card"} >
          <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus mollis nulla, id convallis neque. Donec lacinia libero dolor, vitae volutpat nisi convallis fermentum. Pellentesque nulla neque, rutrum at mauris a, euismod euismod sem. Etiam nec turpis id mauris lacinia porttitor. Mauris mi urna, pulvinar in egestas eu, consequat vel augue. Nunc faucibus at justo sed placerat. Donec quis leo porta diam volutpat tristique. Aliquam gravida cursus elit eget eleifend. Nam ac dolor quis nibh pharetra posuere nec id libero. Maecenas mauris mi, malesuada ac eleifend eget, varius a mauris. Duis a erat varius, volutpat diam quis, blandit urna. Vestibulum dignissim, metus et interdum fermentum, metus arcu tempus massa, non sagittis purus massa varius tellus. Sed sapien felis, pellentesque nec placerat vel, ornare a sapien.
          </div>
        </Card>
      </div>
    );
  }
}

export default App;
