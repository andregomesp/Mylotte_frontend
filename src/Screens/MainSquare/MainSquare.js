import React, {Component} from 'react';
import StartPage from "../StartPage/StartPage";
import {Router, Switch, Route} from 'react-router-dom';
import history from "../../history";
import LotesCompraList from '../LotesCompraList/LotesCompraList';
import LotesVendaList from "../LotesVendaList/LotesVendaList";
import "./MainSquare.css";
export default class MainSquare extends Component {
    render() {
        return (
            <div className={"main-square-wrapper"}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/"><StartPage/></Route>
                        <Route exact path="/lotesCompra"><LotesCompraList/></Route>
                        <Route exact path="/lotesVenda"><LotesVendaList/></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
