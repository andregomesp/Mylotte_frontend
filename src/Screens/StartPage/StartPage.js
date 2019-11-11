import React, {Component} from 'react';
import Caroussel from '../../Components/Caroussel/Caroussel.js';
//import Caroussel from "../../Components/Caroussel/Caroussel"
export default class StartPage extends Component {
  render() {
    return (
      <div className={"main-wrapper"}>
        <Caroussel />
      </div>
    )
  }
}
