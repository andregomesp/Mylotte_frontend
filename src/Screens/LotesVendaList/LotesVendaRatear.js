import React, {Component} from 'react';
import {Modal, Form} from 'react-bootstrap';
import config from "../../config.json"
import "../LotesCompraList/LoteCompraRatear.css";
import Alert from 'react-s-alert';
let context;

export default class LotesVendaRatear extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            lote: {}
        }
        context = this;
    }
    ratearQuantidade = (e) => {
        e.preventDefault();
        let form = e.target;
        let entity = {
            offeredPrice: parseInt(form[0].value, 10),
            offeredPrice: this.state.lote.unitPrice,
            lotId: this.state.lote.id
        }
        let headers = new Headers();
        headers.append("Authorization", localStorage.getItem("mylotte_token"));
        fetch(`http://${config["serverBaseUrl"]}api/lot/enterLotVenda`, {method: 'POST', body: JSON.stringify(entity), mode: "cors", headers: headers})
        .then(r => {
            r.json()
            .then(_ => {
                Alert.success("Lote solicitado com sucesso");
                this.props.getEntities();
                this.setState({show: false, lote: {}});
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <Modal show={this.state.show} onHide={hide}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div>
                            Lançar oferta ao lote
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Form id={"compra-form"} onSubmit={this.ratearQuantidade}>
                            <Form.Group controlId={"quantidade"}>
                                <Form.Label>
                                    Oferte um preço para oferecer
                                </Form.Label>
                                <Form.Control/>
                            </Form.Group>
                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div>
                        <button className={"modal-green-button"} type="submit" form={"compra-form"}>Confirmar</button>    
                    </div>
                </Modal.Footer>
            </Modal>
        )
    }
}

export function show(lote) {
    context.setState({show: true, lote: lote});    
}

export function hide() {
    context.setState({show: false, lote: {}});
}