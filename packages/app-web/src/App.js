import React from 'react';
import './App.css';
const basicsOperations = require('@demo-lerna/basics-operations');

const App = () => (
  <div className="App">
    <span>Operation 2*2 equals {basicsOperations.multiply(2, 2)}</span>
  </div>
);

export default App;