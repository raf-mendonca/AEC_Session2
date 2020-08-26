import React from "react";
import { Link } from "react-router-dom";

export class ExempleLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Link to="/" className="my-3 btn btn-primary">
          Retour à l'accueil
        </Link>
      </>
    );
  }
}