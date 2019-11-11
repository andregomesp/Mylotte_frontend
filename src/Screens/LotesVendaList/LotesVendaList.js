import React, {Component} from 'react';
import LoteCard from '../../Components/LoteCard/LoteCard';
import config from "../../config.json"
export default class LotesVendaList extends Component {
    componentDidMount() {
        fetch(config["serverBaseUrl"], {method: 'GET', mode: "cors"})
        .then(r => {
            r.json()
            .then(json => {
                console.log(json);
                this.setState({lotes: json})
            })
        })
    }

    renderLotesList = () => {
        if (this.props.lotes) {
            return this.props.lotes.map(lote => {
                return  (<LoteCard
                            lote={lote}
                        />)
            })
        }
        return <></>
    }

    render() {
        return (
            <>
            </>
        )
    }
}