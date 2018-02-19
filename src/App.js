import React, {Component} from 'react';
import {render} from 'react-dom';
import Button from 'material-ui/Button';
import logo from './logo.png';
import './App.css';
import Header from './components/header/Header';
import Applist from './components/applist/Applist';

const orgName = "WerkzTech"
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">{orgName}</h1>
        </header>
        <div>
          <Applist/>
        </div>
      </div>
    );
  }
}

export default App;
