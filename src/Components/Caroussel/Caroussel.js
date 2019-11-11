import React, {Component} from 'react';
import "./Caroussel.css";
import Sale from "../../Assets/Images/sale.jpg";
import Sale2 from "../../Assets/Images/sale2.jpg";
import Sale3 from "../../Assets/Images/sale3.jpg";
import slides from './FunctionSlide.js';

export default class Caroussel extends Component {
  render() {
    
    return (

      <div className ={"carroussel-container"}>
          <div class = {"mySlides"}>
            {/* <div class="numbertext">1 / 3</div> */}
              <img className={"sales-banner"} src={Sale} infinite={false}/>
            {/* <div class="numbertext">2 / 3</div>
              <img src ={Sale2}  width={1600} height={640} infinite={false} />
            <div class="numbertext">3 / 3</div>
              <img src ={Sale3}  width={1600} height={640} infinite={false} /> */}
          </div>

          <br/>
{/* 
          <div className={"dot-container"}>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>  */}
          
      <slides />
      </div>
    )
  }
}

 
