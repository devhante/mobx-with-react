import React, { Component } from 'react';
import Counter from './components/Counter';
import Supermarket from './components/Counter';

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <hr />
        <Supermarket />
      </div>
    );
  }
}

export default App;