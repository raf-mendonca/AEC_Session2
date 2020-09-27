//Étudiant: Rafael De Mendonça 
//Projet Final: PWA / CrudCrud - BlogTours
//Cours: Tech. Intégration des interfaces web2 et Techniques de Programmation Web 2
//Date: 2020-09-27

import React from "react";
import {API } from "../constantes";
import { Container, Row } from "react-bootstrap";
import { Rapports } from "./Rapports";
import { Slide } from "react-awesome-reveal"; //Librerie d'animation react-awesome-reveal
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
      <> 
      <Container>
      <Row>
        <Slide triggerOnce>         
          <h1 className="text-muted mb-3">Rapports de voyages</h1>
        </Slide> 
      </Row>
      <Row  className="d-flex justify-content-around">                  
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
      </>     
    );
  }    
}

