import React, { Component } from 'react';
import StarRating from './Components/StarRating';
import Timestamp from './Components/Timestamp';
import Card from './Components/Card';
import Facebook from './Components/Facebook';

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
        {/* 
          * size: enum [ small, medium, large ]
          * buttonText: enum [ login_with, continue_with ]
        */}
        <Facebook 
          appId={218240972070365} 
          token={this.setFacebookToken} 
          size='medium' 
          buttonText='login_with'
          showFriends='false'
          continueAs='true'
          logoutLink='true'/>
      </div>
    );
  }
}

export default App;
