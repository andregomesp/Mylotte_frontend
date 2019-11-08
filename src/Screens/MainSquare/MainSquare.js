import React, {Component} from 'react';
import StartPage from "../StartPage/StartPage";
import {Router, Switch, Route} from 'react-router-dom';
import history from "../../history";
import LotesCompraList from '../LotesCompraList/LotesCompraList';
import LotesVendaList from "../LotesVendaList/LotesVendaList";
export default class MainSquare extends Component {
    constructor(props) {
        super(props)
    }

    renderPage = () => {

    }

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/"><StartPage/></Route>
                    <Route exact path="/lotesCompra"><LotesCompraList/></Route>
                    <Route exact path="/lotesVenda"><LotesVendaList/></Route>
                </Switch>
                
            </Router>
        )
    }
}
