import React from "react";
import {API } from "../constantes";
import { Container, Row, Col } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import { Rapports } from "./Rapports";
import { Slide } from "react-awesome-reveal";
import '../App.sass';

export class Accueil extends React.Component {
  constructor(props) {
    super(props);
    this.state = { donneesRecues: [] };
  }

  //Ajout de la gestion des erreurs
  async componentDidMount() {
    try {
      const response = await fetch(API);
      const reponseDeApi = await response.json();
      this.setState({ donneesRecues: reponseDeApi });
        if (!response.ok) {
          throw Error(response.statusText);
        }
      } catch (error) {
        console.log(error);
      }
  }

  render() {
    return (      
      <Container className="colorTestSass"> 
      <Row>
        <Slide triggerOnce>         
          <h1 className="text-muted mb-3 text-center">Rapports de voyages</h1>
          <h1>SASS funcionando</h1> 
          </Slide> 
      </Row>
      <Row>             
        {this.state.donneesRecues.map((key,i) => (
            <Rapports 
                    titre={key.theme}
                    nom={key.utilisateur}
                    id={key._id}
                    key={key.titre + key._id}                    
                    photo={key.picture} 
                    rapport_voyage={key.rapport}
                    >
            </Rapports>
          ))}                   
        </Row>        
      </Container>      
    );
  }    
}

