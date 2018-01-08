# react_components

This project is a collection of React Components.

All the components are defined in react-components/src/Components

## Star Rating Component
This Component can be used to select a rating out of 'n' which is displayed as stars.

Usage

```<StarRating max={5} />```

Renders 5 stars to select a rating out of 5.

<img src="http://g.recordit.co/PG4jBeFA9E.gif" />

## NavBar Component
This component renders an app navigation component which can be used to change the view of the application. The component uses icons from FontAwesome.

Usage

```
const navItems = [{
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
    
<NavBar vertical={true} items={navItems} />
```

Renders a vertical NavBar

<img src="http://g.recordit.co/z1bih8rCYl.gif" />

You can also render a horizontal bar by changing the vertical prop to {false}

<img src="http://g.recordit.co/kSGzd2FDBM.gif" />

## Card Component

Usage
```
<Card icon={"linode"} headerText={"Sample Card"}>
      <-- Body -->
</Card>
```

<img src="https://ibb.co/c4EKK6" />
