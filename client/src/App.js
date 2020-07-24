import React from 'react';
import './App.css';

import Homepage from './components/Homepage/Homepage'
import Menu from './components/Menu/Menu'
import Dot from './components/UI/DotMenu/DotMenu'
import Arrow from './components/UI/Arrow/Arrow'

function App() {
  return (
    <div className="App">
      <Menu/>
      <Dot/>
      <Homepage/>
      <Arrow/>
    </div>
  );
}

export default App;
