import React from "react";
import { Link } from "react-router-dom";

function BoutonAjouterPokemon () {
  return (
    <Link to="/ajouterPokemon" className="btn btn-primary mt-5">
          Ajouter un Pokemon
    </Link>
  );
}
export default  BoutonAjouterPokemon;