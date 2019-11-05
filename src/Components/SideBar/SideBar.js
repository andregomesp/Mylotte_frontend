import React, {Component} from 'react';
import "../../Components/SideBar/SideBar.css";
import {Link} from "react-router-dom";
export default class SideBar extends Component {
  render() {
    return (
      <div className={"sidebar"}>
        <Link to={"/"} className={"sidebar-item"}>Categorias</Link>
        <Link to={"/lotesCompra"} className={"sidebar-item"}>Lotes de Compra Abertos</Link>
        <Link to={"/lotesVenda"} className={"sidebar-item"}>Lotes de Venda Abertos</Link>
      </div>
    )
  }
}
