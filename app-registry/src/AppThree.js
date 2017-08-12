import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class AppThree extends Component {
  render() {
    return (
      <div className="App">
        <h1>App 3</h1>
        {this.props.appName}
      </div>
    );
  }
}

export default AppThree;
