import React from "react";
import { FormAjouterPokemon } from "./FormAjouterPokemon";

function AjouterPokemon (props) {
  return (
    <>
      <FormAjouterPokemon history={props.history} />
    </>
  );
}
export default AjouterPokemon;