import React from "react";
import { Link } from "react-router-dom";

function BoutonRetourAccueil () {
  return (
    <> 
        <Link to="/" className="btn btn-primary mt-5">
          Retour à la liste de Pokémons
        </Link>
    </>
  );
}
export default BoutonRetourAccueil;