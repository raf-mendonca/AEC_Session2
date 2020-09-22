import React from "react";
import { Link } from "react-router-dom";
import { Card, CardGroup, CardImage, CardBody, CardText, Col } from "react-bootstrap";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from "react-bootstrap/Container";
import { Rapports } from "./Rapports";
import '../App.sass';


export class AfficheVoyage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
    <Jumbotron fluid>
        <Container> 
            <img className="img-fluid rounded-0" variant="top" src={this.props.photo}></img> 
            <Link to={"Rapports/"+ this.props.titre + "?id=" + this.props.id}>
                    <Card.Subtitle><h4>{this.props.nom}</h4> </Card.Subtitle>
                    <p>{this.props.titre}</p>                    
                    <Card.Text className="text-justify">{this.props.rapport_voyage}</Card.Text>
                </Link> 
            <h3>{this.props.nom + "?id=" + this.props.id}</h3>
            <h4>{this.props.titre + "?id=" + this.props.id}</h4>
            <p className="text-justify">{this.props.rapport_voyage}</p>
        </Container>         
    </Jumbotron>       
    );
  }
}