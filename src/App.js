import React, {Component} from 'react';
import TopBar from './Components/TopBar/TopBar';
import "./App.css";

export default class App extends Component {
 
  render() {
    return (
      <div className="app">
        <TopBar/>
      </div>
      
    )
  }
}
