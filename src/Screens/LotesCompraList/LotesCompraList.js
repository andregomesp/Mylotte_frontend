import React, {Component} from 'react';
import LoteCard from '../../Components/LoteCard/LoteCard';

const lotes = []

export default class LotesCompraList extends Component {
    renderLotesList = () => {
        if (this.state.lotes) {
            return this.state.lotes.map(lote => {
                return  (<LoteCard
                            lote={lote}
                        />)
            })
            return <></>
        }
    }

    render() {
        return (
            <>
                {this.renderLotesList()}
            </>
        )
    }
}