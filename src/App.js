import React, { Component } from 'react';
import TopBar from './Components/TopBar/TopBar';
import "./App.css";
import SideBar from './Components/SideBar/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSquare from './Screens/MainSquare/MainSquare';
import LoginModal from './Screens/LoginModal/LoginModal';
import PageFooter from './Components/PageFooter/PageFooter';
import StepCards from './Components/StepCards/StepCards.js';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';



export default class App extends Component {
  render() {
    return (
        <div className="app">
          <TopBar/>
          <SideBar/>
          <MainSquare/>
          <LoginModal/>
          <StepCards />
          <PageFooter/> 
          <Alert stack={{limit: 3}} position={"top-right"}/>
        </div>   
    )
  }
}
