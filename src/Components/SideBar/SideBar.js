import React, {Component} from 'react';
import "../../Components/SideBar/SideBar.css";
import history from "../../history";
export default class SideBar extends Component {
  redirectToPage = (path) => {
    history.push(path)
  }

  render() {
    return (
      <div className={"sidebar"}>
        <button onClick={() => this.redirectToPage("/")} className={"sidebar-item"}>Meus lotes</button>
        <button onClick={() => this.redirectToPage("/lotesCompra")} className={"sidebar-item"}>Lotes de Compra Abertos</button>
        <button onClick={() => this.redirectToPage("/lotesVenda")} className={"sidebar-item"}>Lotes de Venda Abertos</button>
      </div>
    )
  }
}
