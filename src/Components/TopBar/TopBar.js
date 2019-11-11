import React, {Component} from 'react';
import Logo from "../../Assets/Images/lotteLogo.png";
import "./TopBar.css";
import YellowUserIcon from "../../Assets/Images/yellowIcon.png";
import LoggedInInfo from './LoggedInInfo';
import show from "../../Screens/LoginModal/LoginModal";
let context;
export default class TopBar extends Component {
  constructor(props) {
    super(props)
    this.state = {};
    context = this; 
  }
  render() {
    return (
      <div className={"topbar"}>
        <img className={"logo"} src={Logo} alt="logo"/>
        <span className="searchWrapper">
          <div className="searchBarWrapper">
            <input className="searchResearchBar" placeholder="Pesquisar Produtos"/>
          </div>
          <button className="searchTopButton">Pesquisar</button>
        </span>
        {localStorage.getItem("mylotte_token") 
          ? (<LoggedInInfo/>)
          : (<button className="topbar-buttons login-button">
              <img className="loginIcon" src={YellowUserIcon} alt={"yellow-icon"}/>
              <div className="login-text">Login</div>
            </button>)
        }
        
        <button className="topbar-buttons about-us-button">
          Sobre Nós
        </button>
      </div>
      
    )
  }
}

export function login() {
  context.setState({a: "a"})
}
