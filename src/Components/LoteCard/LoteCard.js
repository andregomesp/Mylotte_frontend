import React, {Component} from 'react';
import clock from "../../Assets/Images/clock.png";
import heart from "../../Assets/Images/heart.png";
import favorite from "../../Assets/Images/favorite.png";
import {show as ratearModalShow} from "../../Screens/LotesCompraList/LoteCompraRatear";
import {show as oferecerModalShow} from "../../Screens/LotesVendaList/LotesVendaRatear";
import "./LoteCard.css";
import jeans from "../../Assets/Images/calcabigjeans.jpg";
import lacoste from "../../Assets/Images/lacoste.jpg";

export default class LoteCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    getImage = () => {
        let lote = this.props.lote;
        if (lote.product.name === "Calça Jeans") {
            console.log(jeans);
            return jeans
        } else if (lote.product.name === "Camisa Polo") {
            return lacoste;
        }
    }

    getInfos = () => {
        let lote = this.props.lote;
        return [
            {"label": "Preço Unitário", "control": "", "value": lote.unitPrice},
            {"label": "Qtd total", "control": "", "value": lote.totalQuantity},
            {"label": "Preço total", "control": "", "value": lote.totalPrice},
        ]
    }

    getRemainingTime = () => {
        let closingDateString = this.props.lote.closingDate;
        let closingDate = Date.parse(closingDateString);
        let today = new Date().getTime();
        let difference = Math.floor((closingDate - today)/(1000 * 3600 * 24));
        if (difference > 0) {return `${difference} dias`}
        else if (difference === 0) {return "Hoje"}
        return "Fechado"; 
    }

    render() {
        return (
            <>
                <div className={"card-wrapper"}>
                    <div className={"image-section"}>
                        <img className={"product-image"} src={this.getImage()} alt="nil"/>         
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
                            <div className={"days-left-wrapper"}>{this.getRemainingTime()}</div>
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
                        {this.props.lote.ownedQuantity && this.props.lote.ownedQuantity > 0 &&
                            <div>Possuo {this.props.lote.ownedQuantity} unidades</div>
                        }
                    </div>
                </div>
                <div className={"card-lower-buttons"}>
                    {this.props.type === "COMPRA" ?
                        (<button className={"card-yellow-button"} onClick={() => ratearModalShow(this.props.lote)}>Ratear</button>)
                        :
                        (<button className={"card-yellow-button"} onClick={() => oferecerModalShow(this.props.lote)}>Ofertar</button>)
                    }
                    {this.props.type === "COMPRA" &&
                        <div className="quantity-area">
                            {`${this.props.lote.currentQuantity}/${this.props.lote.totalQuantity}`}
                         </div>
                    }
                </div>
            </>
        )
    }
}