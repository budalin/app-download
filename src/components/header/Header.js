import React, {Component} from 'react';
import logo from '../../logo.png';
import './Header.css';

const orgName = "WerkzTech"
class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">{orgName}</h1>
            </header>
        )
    }
}

export default Header;