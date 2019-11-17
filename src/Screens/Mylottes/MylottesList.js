import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import config from "../../config.json";
import "./MyLottesList.css";
export default class MylottesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entities: []
        }
    }

    componentDidMount() {
        this.getEntities();
    }

    getEntities = () => {
        let headers = new Headers();
        headers.append("Authorization", localStorage.getItem("mylotte_token"));
        fetch(`http://${config["serverBaseUrl"]}api/lot/getMyLottes/`, {method: 'GET', mode: "cors", headers: headers})
        .then(r => {
            r.json()
            .then(json => {
                this.setState({entities: json.entities})
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    renderLines = () => {
        return this.state.entities.map(entity => {
            return (<tr>
                <td>{entity.product.name}</td>
                <td>{entity.product.manufacturer}</td>
                <td>{entity.ownerCompany.socialName}</td>
                <td>{entity.offeredPrice}</td>
                <td>{entity.offeredQuantity}</td>
            </tr>)
        })
    }

    render () {
        return (
            <div className={"table-wrapper"}>
                <h2 className={"lotes"}>Meus lotes</h2> 
                <Table striped bordered hover>
                    <thead>
                        <th>Produto</th>
                        <th>Manufaturador</th>
                        <th>Companhia do lote</th>
                        <th>Valor un.</th>
                        <th>Qtde</th>
                    </thead>
                    <tbody>
                        {this.renderLines()}
                    </tbody>
                </Table>
           </div> 
        )
    }

}