import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apps: []
    }
    this.addApp = this.addApp.bind(this);
    this.removeApp = this.removeApp.bind(this);
  }
  
  addApp() {
    let appName = `App${this.state.apps.length + 1}`
    this.setState({
      apps: this.state.apps.concat(appName)
    })
  }

  removeApp() {
    const index = this.state.apps.length;
    this.setState((prevState) => ({
      apps: [...prevState.apps.slice(0, index-1)]
    }))
  }

  render() {
    const renderApps =
      this.state.apps.map((item, index) =>
        <div id={item} className="mkt-app" key={index}>A marked up div for {item}</div>
      )

    return (
      <div className="App">
        <button onClick={this.addApp}>Add App</button>
        <button onClick={this.removeApp}>Remove App</button>
        {renderApps}
      </div>
    );
  }
}

export default App;
