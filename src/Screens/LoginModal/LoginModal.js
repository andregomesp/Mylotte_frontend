import {Modal, Form} from 'react-bootstrap';
import "LoginModal.css"
export default class LoginModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        };
    }
    render() {
        return (
            <Modal show={this.state.show}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div>
                            
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                    <Form>
                            <Form.Group>
                                <Form.Label>
                                    Email
                                </Form.Label>
                                <Form.Control/>
                            </Form.Group>
                            <Form.Group>
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