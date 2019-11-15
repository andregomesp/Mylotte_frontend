import React, {Component} from 'react';
import loggedInUser from "../../Assets/Images/iconeUsuario.png";
import "./LoggedInInfo.css";

export default class LoggedInInfo extends Component {
    render() {
        return (
            <div className={"logged-info-wrapper"}>
                <img className={"logged-info-image"} src={loggedInUser} alt={"loggedin"}/>
                <div>{localStorage.getItem("mylotte_username")}</div>
            </div>
        )
    }
}