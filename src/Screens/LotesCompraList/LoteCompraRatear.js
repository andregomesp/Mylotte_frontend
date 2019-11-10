import React, {Component} from 'react';
import {Modal, Form} from 'react-bootstrap';
let context;
export default class LotesCompraRatear extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        context = this;
    }
    ratearQuantidade = (e) => {
        
        let form = e.form;
        console.log(form);
        // componentDidMount() {
        //     fetch(`http://${config["serverBaseUrl"]}api/enterLot`, {method: 'POST', body: {}, mode: "cors"})
        //     .then(r => {
        //         if (!r.ok) {throw Error("não foi possivel logar!")}
        //         r.json()
        //         .then(json => {
        //             this.setState({lotes: json})
        //         })
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
        // }
    }

    render() {
        return (
            <Modal show={this.state.show}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div>
                            Ratear Lote    
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Form id={"compra-form"} onSubmit={this.ratearQuantidade}>
                            <Form.Group>
                                <Form.Label>
                                    Quantidade
                                </Form.Label>
                                <Form.Control/>
                            </Form.Group>
                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div>
                        <button type="submit" form={"compra-form"}>Confirmar</button>    
                    </div>
                </Modal.Footer>
            </Modal>
        )
    }
}

export function show() {
    context.setState({show: true});    
}

export function hide() {
    context.setState({show: false});
}