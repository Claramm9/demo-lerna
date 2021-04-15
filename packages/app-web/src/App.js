import React from 'react';
import logo from './logo.svg';
import './App.css';
const basicsOperations = require('@testing-lerna/basics-operations');

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <span>Operation 2*2 equals {basicsOperations.multiply(2, 2)}</span>
  </div>
);

export default App;