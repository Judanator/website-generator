import React from 'react';
import './App.css';

import Homepage from './components/Homepage/Homepage'
import Menu from './components/Menu/Menu'

function App() {
  return (
    <div className="App">
      <Menu/>
      <Homepage/>
    </div>
  );
}

export default App;
