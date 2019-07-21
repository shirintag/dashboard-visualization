import React from 'react';
import './App.css';
import data from './vai-challange-input.json'
import Menu from './components/Menu'
import Dashboard from './components/Dashboard'


function App() {
  return (
    <div className="App">
      <Menu />
      <Dashboard />
    </div>
  );
}

export default App;
