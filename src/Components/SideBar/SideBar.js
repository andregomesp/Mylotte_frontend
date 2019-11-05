import React, {Component} from 'react';
import "../../Components/SideBar/SideBar.css";
export default class SideBar extends Component {
  render() {
    return (
      <div className={"sidebar"}>
        <button className={"sidebar-item"}>Categorias</button>
        <button className={"sidebar-item"}>Lotes de Compra Abertos</button>
        <button className={"sidebar-item"}>Lotes de Venda Abertos</button>
        <button className={"sidebar-item"}>Lotes a serem fechados</button>
      </div>
    )
  }
}
