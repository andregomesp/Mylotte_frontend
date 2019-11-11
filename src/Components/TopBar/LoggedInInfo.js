import React, {Component} from 'react';
import loggedInUser from "../../Assets/Images/iconeUsuario.png"

export default class LoggedInInfo extends Component {
    render() {
        return (
            <div className={""}>
                <img src={loggedInUser} alt={"loggedin"}/>
                <div>{localStorage.getItem("mylotte_username")}</div>
            </div>
        )
    }
}