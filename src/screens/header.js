import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';

export default class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            x: 1
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    { this.state.x }
                <button onClick={() => this.setState({x: this.state.x + 1 })}>plus</button>
                    <button onClick={() => this.setState({x: this.state.x - 1 })}>minus</button>
                </header>
            </div>
        );
    }
}
