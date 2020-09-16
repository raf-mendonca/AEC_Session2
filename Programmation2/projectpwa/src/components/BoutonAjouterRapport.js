import React from "react";
import { Link } from "react-router-dom";

export class BoutonAjouterRapport extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <> 
        <Link to="/AjouterRapport" className="btn btn-primary mt-5">
          Ajouter un Rapport de Voyage
        </Link>
      </>
    );
  }
}