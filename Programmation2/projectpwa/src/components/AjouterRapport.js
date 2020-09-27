//Étudiant: Rafael De Mendonça 
//Projet Final: PWA / CrudCrud - BlogTours
//Cours: Tech. Intégration des interfaces web2 et Techniques de Programmation Web 2
//Date: 2020-09-27

import React from "react";
import { FormAjoutRappVoyage } from "./FormAjoutRappVoyage";


export class AjouterRapport extends React.Component {
  constructor(props) {
    super(props);
  } 
  render() {
    return (
      <>
        <FormAjoutRappVoyage history={this.props.history} />
      </>
    );
  }
}