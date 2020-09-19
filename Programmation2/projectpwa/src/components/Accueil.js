import React from "react";
import {API } from "../constantes";
import { Container, Row, Col } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import { Rapports } from "./Rapports";

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
      <Container>        
          <h1 className="text-muted mb-3 text-center">Rapports de voyages</h1>         
        <Row>      
        {this.state.donneesRecues.map((key,i) => (
            <Rapports 
                    titre={key.theme}
                    id={key._id}
                    key={key.titre + key._id}
                    nom={key.utilisateur}
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

