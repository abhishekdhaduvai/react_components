import React from 'react';

class Google extends React.Component {

  state = {
    signedIn: false,
    auth: undefined,
  }
  
  componentDidMount() {

    var signInChanged = () => {
      const { auth } = this.state
      if(auth.isSignedIn.get()){
        this.setState({signedIn: true});
        this.handleSignIn(auth.currentUser.get());
      }
      else {
        this.setState({signedIn: false});
        this.props.onLogout();
      }
    }
    
    var init = () => {
      const params = {
        client_id: this.props.clientId,
        scope: 'profile'
      }
      window.gapi.load('auth2', () => {
        window.gapi.auth2.init(params)
        .then(res => {
          this.setState({auth: res})
          if(res.isSignedIn.get()) {
            this.setState({signedIn: true})
          }
          res.isSignedIn.listen(signInChanged);
          if(res.isSignedIn.get()){
            this.setState({signedIn: true});
            this.handleSignIn(res.currentUser.get());
          }
        });
      });
    }

    (function(d, s, id, callback){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js";
      js.onload = callback;
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-api', init));

  }

  handleSignIn = (res) => {
    const basicProfile = res.getBasicProfile();
    res.googleId = basicProfile.getId();
    res.profile = {
      id: basicProfile.getId(),
      name: basicProfile.getName(),
      email: basicProfile.getEmail(),
      givenName: basicProfile.getGivenName(),
      familyName: basicProfile.getFamilyName(),
    }
    this.props.onLogin(res)
  }

  signIn = (e) => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn();
  }

  signOut = (e) => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      this.setState({signedIn: false})
    });
    
  }
  
  render(){
    const { signedIn } = this.state;
    const { signInText, signOutText } = this.props;
    return (
      <div>
        {signedIn ? 
          <button 
            onClick={this.signOut}
            style={initialStyle}>
              {signOutText || 'Sign Out'}
          </button>
          :
          <button 
            onClick={this.signIn}
            style={initialStyle}>
              {signInText || 'Sign In'}
          </button>
        }
      </div>
    )
  }
}

const initialStyle = {
  display: 'inline-block',
  background: '#d14836',
  color: '#fff',
  width: 150,
  height: 29,
  paddingTop: 5,
  paddingBottom: 5,
  borderRadius: 3,
  border: '1px solid transparent',
  fontSize: 13,
  fontFamily: 'Roboto',
  cursor: 'pointer',
}

export default Google;