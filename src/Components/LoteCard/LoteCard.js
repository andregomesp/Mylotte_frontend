import React, {Component} from 'react';
import clock from "../../Assets/Images/clock.png";
import heart from "../../Assets/Images/heart.png";
import favorite from "../../Assets/Images/favorite.png";
const infos = [
    {"label": "Ordem Minima", "control": ""},
    {"label": "Qtd total no lote", "control": ""},
    {"label": "Preço Unitario", "control": ""},
    {"label": "Preço Lote", "control": ""},
]

export default class LoteCard extends Component {
    render() {
        return (
            <div>
                <div className={"card-left-area"}>Titulo</div>
                <div className={"card-button-section"}>
                    <img src={clock} alt="clock"/>
                    <img src={heart} alt="heart"/>
                    <img src={favorite} alt="favorite"/>
                </div>
                <div className={"card-lower-info"}>
                    {
                        infos.map(info => {
                            return (
                                <div>
                                    {info.label}
                                    <div className="card-info-box"></div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={"card-lower-buttons"}>
                    <button className={"card-yellow-button"}>Ratear Lote</button>
                    <button className={"card-yellow-button"}>Arrematar Lote</button>
                </div>
            </div>
        )
    }
}