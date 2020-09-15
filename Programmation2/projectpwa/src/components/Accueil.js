import React from "react";
import {API} from "../constantes";
import { Container, Row, Col, Grid } from "react-bootstrap";
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
        <Row>
          <h1 className="text-muted mb-3">Rapports de voyages</h1> 
        </Row>
        <Row>
        {this.state.donneesRecues.map((key,i) => (
            <Rapports 
                    titre={key.titre}
                    id={key._id}
                    key={key.titre + key._id}
                    utilisateur={key.utilisateur}
                    nouvelle={key.nouvelle} 
                    imageURL={key.imageURL}
                    >
            </Rapports>
          ))}
        </Row>
      </Container>      
    );
  }    
}
