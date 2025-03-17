import React from 'react';
import Home from './pages/home/Home';
import AppBar from './components/AppBar';

import './styles/App.css';

function App() {
  return (
    <div>
      <AppBar />
      <Home />
    </div>
  );
}

export default App;
