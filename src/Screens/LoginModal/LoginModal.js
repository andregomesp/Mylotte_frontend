import {Modal, Form} from 'react-bootstrap';
import React, { Component } from 'react';
import config from "../../config.json";
import "./LoginModal.css"; 
let context;
export default class LoginModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        };
        context = this;
    }

    login = (e) => {
        e.preventDefault();
        let form = e.target;
        let entity = {
            username: form[0].value,
            password: form[1].value
        }
        let headers = new Headers();
        fetch(`http://${config["serverBaseUrl"]}api/login`, {method: 'POST', body: JSON.stringify(entity), mode: "cors", headers: headers})
        .then(r => {
            r.json()
            .then(json => {
                localStorage.setItem("mylotte_token", json.access_token);
                localStorage.setItem("mylotte_username", json.username)
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <Modal show={this.state.show}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div>
                            Login
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Form onSubmit={this.login}>
                            <Form.Group controlId="email">
                                <Form.Label>
                                    Email
                                </Form.Label>
                                <Form.Control/>
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>
                                    Senha
                                </Form.Label>
                                <Form.Control/>
                            </Form.Group>
                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div></div>
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