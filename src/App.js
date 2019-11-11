import React, { Component } from 'react';
import TopBar from './Components/TopBar/TopBar';
import "./App.css";
import SideBar from './Components/SideBar/SideBar';
import StartPage from './Screens/StartPage/StartPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSquare from './Screens/MainSquare/MainSquare';
import LoginModal from './Screens/LoginModal/LoginModal';
import PageFooter from './Components/PageFooter/PageFooter';
import Caroussel from './Components/Caroussel/Caroussel.js';
import StepCards from './Components/StepCards/StepCards.js';


export default class App extends Component {
 
  render() {
    return (
      <div className="app">
        <TopBar/>
        <SideBar/>
        <MainSquare/>
        <PageFooter/> 
        <LoginModal/>
        <Caroussel />
        <StepCards />
      </div>
    
    )
  }
}
