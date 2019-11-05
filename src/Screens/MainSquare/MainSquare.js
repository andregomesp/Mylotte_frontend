import React, {Component} from 'react';
import StartPage from "../StartPage/StartPage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
                </Switch>
            </Router>
        )
    }
}
