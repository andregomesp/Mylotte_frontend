import React, {Component} from 'react';
import LoteCard from '../../Components/LoteCard/LoteCard';
import config from "../../config.json";
import "../LotesCompraList/LotesCompraList.css";
import LotesVendaRatear from "./LotesVendaRatear";
export default class LotesVendaList extends Component {
    constructor(props) {
        super(props);
        this.state = {entities: []}
    }
    componentDidMount() {
        let headers = new Headers();
        headers.append("Authorization", localStorage.getItem("mylotte_token"));
        fetch(`http://${config["serverBaseUrl"]}api/lot?type=VENDA`, {method: 'GET', mode: "cors", headers: headers})
        .then(r => {
            r.json()
            .then(json => {
                this.setState({entities: json.entities})
            })
        })
    }

    renderLotesList = () => {
        return this.state.entities && this.state.entities.map(lote => {
            return  (<LoteCard
                        lote={lote}
                        type={"VENDA"}
                    />)
        })
    }

    render() {
        return (
            <div className={"lotes-list-wrapper"}>
                {this.renderLotesList()}
                <LotesVendaRatear
                    getEntities={this.getEntities}
                />
            </div>
        )
    }
}