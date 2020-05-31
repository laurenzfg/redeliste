import React from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            This app is totally gonna be awesome
        </p>
        <Button variant="contained" color="primary">
            2 weeks later we got a button
        </Button>
      </header>
    </div>
  );
}

export default App;
