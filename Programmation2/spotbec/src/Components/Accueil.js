import React from "react";
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import logoSpotbec from "../img/logoSpotbec.png";
import {Catalogue} from './Catalogue'
import {Connexion} from './Connexion'
import {Deconnexion} from './Deconnexion'

export class Accueil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {connecter: false};
    this.gererConnexion = this.gererConnexion.bind(this);
    this.verifierConnexion = this.verifierConnexion.bind(this);
  }

  verifierConnexion(connexion){
    this.setState({ connecter: connexion });
  }

  gererConnexion(){
    if(this.state.connecter){
      return (
        <Container fluid>
          <Row>
            <Col>
              <img src={logoSpotbec} alt="Spotbec" width="100px"/>
            </Col>
            <Col>
              <Deconnexion onClick={this.verifierConnexion} />
            </Col>
          </Row>
          <Catalogue />
        </Container>  
      )
    }
    else{
      return(
        <Connexion onClick={this.verifierConnexion} />
      )
    }
  }
  render() {
    return (
        this.gererConnexion()
    );
  }
}