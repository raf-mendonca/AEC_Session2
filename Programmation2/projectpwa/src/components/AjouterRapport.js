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