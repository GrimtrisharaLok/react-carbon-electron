import React, { Component } from 'react';
import './App.css';

class Button extends Component {
  constructor(props) {
      super(props);
      this.state = {};
  }
  render() {
      return (
          <input type="button" class="btn" value={this.props.value} />
      );
  }
}

class App extends Component {
  render() {
    return (
      <Button value="Button" />
    );
  }
}

export default App;
