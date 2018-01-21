import React, { Component } from 'react';
import Balance from './components/Balance';
import Transactions from './components/Transactions';

class App extends Component {
  render() {
    return (
      <div>
        <div>Welcome to Your Bank Account</div>
        <Balance />
        <Transactions />
      </div>
    );
  }
}

export default App;
