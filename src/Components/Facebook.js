import React from 'react';

class Facebook extends React.Component {

  componentDidMount(){
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : this.props.appId,
        cookie     : true,
        xfbml      : true,
        version    : 'v2.4'
      });
      
      // window.FB.getLoginStatus(response => {
      //   if(response.authResponse) {
      //     window.FB.api('/me', {fields: 'first_name, last_name'}, function(response) {
      //       console.log(response);
      //     });
      //   }
      // });

      window.FB.Event.subscribe('auth.statusChange', response => {
        if(response.authResponse){
          this.props.token(response)
        }
        else {
          this.props.token('Error');
        }
      });

    }.bind(this);

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  render() {
    return (
      <div 
        className="fb-login-button" 
        data-max-rows="1" 
        data-size={this.props.size} 
        data-button-type={this.props.buttonText} 
        data-show-faces={this.props.showFriends} 
        data-auto-logout-link={this.props.logoutLink} 
        data-use-continue-as={this.props.continueAs}>
      </div>
    )
  }
}

export default Facebook;