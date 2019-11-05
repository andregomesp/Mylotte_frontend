import React, {Component} from 'react';
import Logo from "../../Assets/Images/lotteLogo.png";
import "./TopBar.css";
import YellowUserIcon from "../../Assets/Images/yellowIcon.png";

class TopBar extends Component {
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
        <button className="topbar-buttons login-button">
          <img className="loginIcon" src={YellowUserIcon} alt={"yellow-icon"}/>
          <div className="login-text">Login</div>
        </button>
        <button className="topbar-buttons about-us-button">
          Sobre Nós
        </button>
      </div>
      
    )
  }
}

export default TopBar;
