import React, { Component } from 'react';
import TopBar from './Components/TopBar/TopBar';
import "./App.css";
import SideBar from './Components/SideBar/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSquare from './Screens/MainSquare/MainSquare';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import LoginModal from './Screens/LoginModal/LoginModal';
import PageFooter from './Components/PageFooter/PageFooter';
import Caroussel from './Components/Caroussel/Caroussel.js';
import StepCards from './Components/StepCards/StepCards.js';


const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_RIGHT,
  timeout: 3000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}



export default class App extends Component {
  render() {
    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <div className="app">
          <TopBar/>
          <SideBar/>
          <MainSquare/>
          <PageFooter/> 
          <LoginModal/>
          <Caroussel />
          <StepCards />
        </div>
      </AlertProvider>   
    )
  }
}
