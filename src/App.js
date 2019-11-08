import React, {Component} from 'react';
import TopBar from './Components/TopBar/TopBar';
import "./App.css";
import SideBar from './Components/SideBar/SideBar';
import StartPage from './Screens/StartPage/StartPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSquare from './Screens/MainSquare/MainSquare';

export default class App extends Component {
 
  render() {
    return (
      <div className="app">
        <TopBar/>
        <SideBar/>
        <MainSquare/>
      </div>
      
    )
  }
}
