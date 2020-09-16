import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import '../App.sass'

export class Rapports extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <CardGroup>
            <Card > 
              <Card.Img variant="top" src={this.props.photo} rounded width="125" />       
              <Card.Body>
                <Link to={"Rapports/"+ this.props.titre + "?id=" + this.props.id}>
                    <Card.Subtitle>{this.props.nom}</Card.Subtitle>
                    <Card.Text className="text-justify">{this.props.rapport_voyage}</Card.Text>
                </Link>
              </Card.Body>
            </Card>
      </CardGroup>     
    );
  }
}