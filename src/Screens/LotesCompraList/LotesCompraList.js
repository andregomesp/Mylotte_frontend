import React, {Component} from 'react';
import LoteCard from '../../Components/LoteCard/LoteCard';
import config from "../../config.json"
const lotes = []

export default class LotesCompraList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lotes: []
        }
    }
    componentDidMount() {
        fetch(`http://${config["serverBaseUrl"]}api/lot`, {method: 'GET', mode: "cors"})
        .then(r => {
            if (!r.ok) {throw Error("não foi possivel logar!")}
            r.json()
            .then(json => {
                this.setState({lotes: json})
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
                    />)
        })
    }

    render() {
        return (
            <>
                {this.renderLotesList()}
            </>
        )
    }
}