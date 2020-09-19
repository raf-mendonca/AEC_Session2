import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Row from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col";


import '../main.sass'

export class Rapports extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      
      <Col xs={12} sm={6} lg={6}>
            <Card className="mt-3 " style={{ width: "26rem"}}> 
              <Card.Img variant="top" src={this.props.photo} />       
              <Card.Body>
                <Link to={"Rapports/"+ this.props.titre + "?id=" + this.props.id}>
                    <Card.Subtitle></Card.Subtitle>
                    <h4>{this.props.nom}</h4>
                    <p>{this.props.utisateur}</p>
                    <Card.Text className="text-justify">{this.props.rapport_voyage}</Card.Text>
                </Link>
              </Card.Body>
            </Card>
      </Col>         
    );
  }
}