import React from "react";
import FormEditerRapport from './FormEditerRapport';

export class EditerRapport extends React.Component {
  constructor(props) {
    super(props);
  } 
  render() {
    return (
      <>
        <FormEditerRapport history={this.props.history} />
      </>
    );
  }
}