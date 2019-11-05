import React, {Component} from 'react';
import StartPage from "../StartPage/StartPage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
            <Router>
                <Switch>
                    <Route exact path="/"><StartPage/></Route>
                    <Route exact path="/lotesCompra"><LotesCompraList/></Route>
                    <Route exact path="/lotesVenda"><LotesVe/></Route>
                </Switch>
                
            </Router>
        )
    }
}
