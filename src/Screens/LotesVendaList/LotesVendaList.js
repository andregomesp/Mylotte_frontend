import React, {Component} from 'react';
import LoteCard from '../../Components/LoteCard/LoteCard';
import config from "../../config.json"
export default class LotesVendaList extends Component {
    constructor(props) {
        super(props);
        this.state = {entities: []}
    }
    componentDidMount() {
        fetch(`${config["serverBaseUrl"]}api/lot/lotVendas`, {method: 'GET', mode: "cors"})
        .then(r => {
            r.json()
            .then(json => {
                this.setState({lotes: json.entities})
            })
        })
    }

    renderLotesList = () => {
        return this.state.lotes.map(lote => {
            return  (<LoteCard
                        lote={lote}
                        type={"VENDA"}
                    />)
        })
    }

    render() {
        return (
            <>
            </>
        )
    }
}