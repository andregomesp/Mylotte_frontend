import React, {Component} from 'react';
import clock from "../../Assets/Images/clock.png";
import heart from "../../Assets/Images/heart.png";
import favorite from "../../Assets/Images/favorite.png";
import {show as ratearModalShow} from "../../Screens/LotesCompraList/LoteCompraRatear";
import "./LoteCard.css";

export default class LoteCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    getInfos = () => {
        let lote = this.props.lote
        return [
            {"label": "Preço Unitário", "control": "", "value": lote.unitPrice},
            {"label": "Qtd total", "control": "", "value": lote.totalQuantity},
            {"label": "Preço total", "control": "", "value": lote.totalPrice},
        ]
    }

    render() {
        return (
            <>
                <div className={"card-wrapper"}>
                    <div className={"image-section"}>
                                        
                    </div>
                    <div className={"card-first-row"}>
                        
                        <div className={"card-left-area"}>
                            <div>
                                {this.props.lote.product.name}
                            </div>
                            <div>
                                {this.props.lote.product.manufacturer}
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
                            this.getInfos().map(info => {
                                return (
                                    <div className={"card-info-wrapper"}>
                                        <div className={"card-info-label"}>{info.label}</div>
                                <div className="card-info-box">{info.value}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={"card-lower-buttons"}>
                    <button className={"card-yellow-button"} onClick={() => ratearModalShow(this.props.lote)}>Ratear Lote</button>
                    {/* <button className={"card-yellow-button"}>Arrematar Lote</button> */}
                </div>
            </>
        )
    }
}