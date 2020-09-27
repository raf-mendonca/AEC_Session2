//Étudiant: Rafael De Mendonça 
//Projet Final: PWA / CrudCrud - BlogTours
//Cours: Tech. Intégration des interfaces web2 et Techniques de Programmation Web 2
//Date: 2020-09-27

import React from "react";
import { Container, Row } from "react-bootstrap";
import '../App.sass';

export class PageNotFound extends React.Component {
  render() {
    return (
      <>
        <Container fluid>
        <img className="error404" src={"../img/Error404.jpg"}/>
        </Container>
      </>
    );
  }
}