import React, {Component} from 'react';
import "./StepCards.css";
import step1 from "../../Assets/Images/step1.jpg";
import step2 from "../../Assets/Images/step2.jpg";
import step3 from "../../Assets/Images/step3.jpg";
import step4 from "../../Assets/Images/step4.jpg";

class StepCards extends Component {
    render() {

      return (

        <div className={"divSteps"}>
            <div class="stepsLine" /> 
            <div className={"stepline-placeholder"} />
                <div className={"img1"}>
                       <img src= {step1} width={640} height={380}/>
                       <div class={"content1"} />  
                       <p  class={"pstep1"}> Cadastre e se torne um de nossos colaboradores! </p>
                  </div>
                <div className={"img2"} >
                    <img src={step2} width={640} height={380} />
                    <div class={"content2"} />  
                       <p  class={"pstep2"}>Anuncie seus lotes! </p>
                </div>
                <div className={"img3"} >
                    <img src={step3} width={640} height={380} />
                    <div class={"content3"} />  
                       <p  class={"pstep3"}>Compre e venda seus lotes a seu preco </p>
                </div>

                <div className={"img4"} >
                    <img src={step4}  width={640} height={380}/>
                    <div class={"content3"} />  
                       <p  class={"pstep3"}>Realize seu melhor negocio</p>
               </div>
        </div>
           
      )
    }
}

export default StepCards;