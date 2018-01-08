import React, { Component } from 'react';
import StarRating from './Components/StarRating';
import Timestamp from './Components/Timestamp';
import NavBar from './Components/NavBar';
import Card from './Components/Card';
import Highcharts from 'highcharts';

class Chart extends Component {
  componentDidMount() {
    this.chart = new Highcharts[this.props.type || 'Chart'](
      this.chartEl,
      this.props.options
    );
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return <div ref={el => (this.chartEl = el)} />;
  }
}

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
    const options = {
      title: {
        text: 'Fruit Consumption',
      },
      xAxis: {
        categories: [
          'Apples',
          'Bananas',
          'Oranges',
          'Pineapples',
          'Blueberries',
        ],
      },
      yAxis: {
        title: {
          text: 'Fruit eaten',
        },
      },
      chart: {
        type: 'line',
      },
      series: [
        {
          name: 'Jane',
          data: [1, 0, 4, 0, 3],
        },
        {
          name: 'John',
          data: [5, 7, 3, 2, 4],
        },
        {
          name: 'Doe',
          data: [0, 0, 0, 1, 0],
        },
      ],
    };
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
          <Chart options={options} />
        </Card>
      </div>
    );
  }
}

export default App;
