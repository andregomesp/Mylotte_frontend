import React, {Component} from 'react';
import clock from "../../Assets/Images/clock.png";
import heart from "../../Assets/Images/heart.png";
import favorite from "../../Assets/Images/favorite.png";
import "./LoteCard.css";
const infos = [
    {"label": "Ordem Minima", "control": ""},
    {"label": "Qtd total no lote", "control": ""},
    {"label": "Preço Lote", "control": ""},
]

export default class LoteCard extends Component {
    render() {
        return (
            <>
                <div className={"card-wrapper"}>
                    <div className={"image-section"}>
                                        
                    </div>
                    <div className={"card-first-row"}>
                        
                        <div className={"card-left-area"}>
                            <div>
                                Título
                            </div>
                            <div>
                                Subtítulo
                            </div>
                        </div>
                        <div className={"card-button-section"}>
                            <img className={"card-icon"} src={clock} alt="clock"/>
                            <div className={"days-left-wrapper"}></div>
                            <img className={"card-icon"} src={heart} alt="heart"/>
                            <img className={"card-icon"} src={favorite} alt="favorite"/>
                        </div>
                    </div>
                    <div className={"card-lower-info"}>
                        {
                            infos.map(info => {
                                return (
                                    <div className={"card-info-wrapper"}>
                                        <div className={"card-info-label"}>{info.label}</div>
                                        <div className="card-info-box"></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={"card-lower-buttons"}>
                    <button className={"card-yellow-button"}>Ratear Lote</button>
                    <button className={"card-yellow-button"}>Arrematar Lote</button>
                </div>
            </>
        )
    }
}