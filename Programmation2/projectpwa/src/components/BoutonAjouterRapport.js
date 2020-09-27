//Étudiant: Rafael De Mendonça 
//Projet Final: PWA / CrudCrud - BlogTours
//Cours: Tech. Intégration des interfaces web2 et Techniques de Programmation Web 2
//Date: 2020-09-27

import React from "react";
import { Link } from "react-router-dom";

export class BoutonAjouterRapport extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <> 
        <Link to="/AjouterRapport" className="btn btn-sm mt-5 rounded-0 btn-style fixed-bottom" size="md" >
          Ajouter un Rapport de Voyage
        </Link>
      </>
    );
  }
}