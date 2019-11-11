import React, {Component} from 'react';
import step1 from "../../Assets/Images/step1.jpg";
import step2 from "../../Assets/Images/step2.jpg";
import step3 from "../../Assets/Images/step3.jpg";
import step4 from "../../Assets/Images/step4.jpg";
import medalha1 from "../../Assets/Images/medalha1.png";
import medalha2 from "../../Assets/Images/medalha2.png";
import medalha3 from "../../Assets/Images/medalha3.png";
import medalha4 from "../../Assets/Images/medalha4.png";

const steps = [step1, step2, step3, step4];
const medalhas = [medalha1, medalha2, medalha3, medalha4];
export default class StepCards extends Component {
  
  renderSteps = () => {
    return steps.map((step, index) => {
      return (
        <div class="step-holder">
          <a class="stepLink" href="#cadastro">
              <img class="step" src={step} alt="Primeiro Passo"/>
              <div class="content">
                  <p class="p1step"> Cadastre-se e torne-se um de nossos colaboradores!</p>
                  <img class="medalha1" src={medalhas[index]}/>
              </div> 
          </a>
        </div>
      )
    })
  }
  
  render() {
    return (
      <>{this.renderSteps()}</>
    )
  }
} 