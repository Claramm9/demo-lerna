import React from 'react';
import logo from './logo.svg';
import { Message } from 'components';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <Message />
  </div>
);

export default App;