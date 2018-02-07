# react_components

This project is a collection of React Components.

All the components are defined in react-components/src/Components

## Facebook Login

Usage

```
<Facebook 
  appId={your-app-Id} 
  token={this.setFacebookToken} 
  size='medium' 
  buttonText='login_with'
  showFriends='false'
  continueAs='true'
  logoutLink='true'/>
```
<img src="http://g.recordit.co/e8VIoUH8Rj.gif" />

## Star Rating Component
This Component can be used to select a rating out of 'n' which is displayed as stars.

Usage

```<StarRating max={5} />```

Renders 5 stars to select a rating out of 5.

<img src="http://g.recordit.co/PG4jBeFA9E.gif" />

## Card Component

Usage

```
<Card icon={"linode"} headerText={"Sample Card"}>
      <-- Body -->
</Card>
```
