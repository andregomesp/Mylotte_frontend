import React, {Component} from 'react';
import LoteCard from '../../Components/LoteCard/LoteCard';

const lotes = []

export default class LotesVendaList extends Component {
    renderLotesList = () => {
        if (this.props.lotes) {
            return this.props.lotes.map(lote => {
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
            </>
        )
    }
}