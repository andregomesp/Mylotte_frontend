import React, {Component} from 'react';
import LoteCard from '../../Components/LoteCard/LoteCard';
import config from "../../config.json";
import "./LotesCompraList.css";
import LotesCompraRatear from './LoteCompraRatear';

export default class LotesCompraList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lotes: []
        }
    }
    componentDidMount() {
        this.getEntities()
    }

    getEntities = () => {
        let headers = new Headers();
        headers.append("Authorization", localStorage.getItem("mylotte_token"));
        fetch(`http://${config["serverBaseUrl"]}api/lot`, {method: 'GET', mode: "cors", headers: headers})
        .then(r => {
            r.json()
            .then(json => {
                this.setState({lotes: json.entities})
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    renderLotesList = () => {
        return this.state.lotes.map(lote => {
            return  (<LoteCard
                        lote={lote}
                        type={"COMPRA"}
                    />)
        })
    }

    render() {
        return (
            <div className={"lotes-list-wrapper"}>
                {this.renderLotesList()}
                <LotesCompraRatear
                    getEntities={this.getEntities}
                />
            </div>
        )
    }
}