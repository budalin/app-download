import React, {Component} from 'react';
import {render} from 'react-dom';
import Header from './components/header/Header';
import Applist from './components/applist/Applist';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <div>
          <Applist/>
        </div>
      </div>
    );
  }
}

export default App;
