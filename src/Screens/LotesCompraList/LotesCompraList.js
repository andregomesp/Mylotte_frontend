import React, {Component} from 'react';
import LoteCard from '../../Components/LoteCard/LoteCard';
import config from "../../config.json";
import "./LotesCompraList.css";
import LotesCompraRatear from './LoteCompraRatear';
import product1 from '../../Assets/Images/power_bank.jpg';
import product2 from '../../Assets/Images/relogio.jfif';
import product3 from '../../Assets/Images/jacket.jfif';
import product4 from '../../Assets/Images/jeans.jpg';


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
        fetch(`http://${config["serverBaseUrl"]}api/lot?type=COMPRA`, {method: 'GET', mode: "cors", headers: headers})
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
                <div className={"product1"} src ={product1} />
                <div className={"product2"} src ={product2} />
                <div className={"product3"} src ={product3} />
                <div className={"product4"} src ={product4} />
                
                
                
                
            </div>
        )
    }
}