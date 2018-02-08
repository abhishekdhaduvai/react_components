import React, { Component } from 'react';
import StarRating from './Components/StarRating';
import Timestamp from './Components/Timestamp';
import Card from './Components/Card';
import Facebook from './Components/Facebook';
import Google from './Components/Google';

class App extends Component {

  googleLogin = (userinfo) => {
    console.log('Google user ', userinfo)
  }

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
        <div style={{display: 'flex'}}>
          {/* 
            * size: enum [ small, medium, large ]
            * buttonText: enum [ login_with, continue_with ]
          */}
          <Facebook 
            appId={218240972070365} 
            onLogin={this.handleLogin}
            onLogout={this.handleLogout}
            size='medium' 
            buttonText='login_with'
            showFriends='false'
            continueAs='true'
            logoutLink='true'/>

          <Google 
            clientId='753560117840-taur5f0p90q09kmvtdc8p80j0e5mhi3j.apps.googleusercontent.com'
            signInText='Log In With Google'
            signOutText='Log Out'
            onLogin={this.googleLogin}
            onLogout={(e) => console.log('logged out')} />
        </div>
      </div>
    );
  }
}

export default App;
