import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import {Container, Row, Col} from "react-bootstrap";
import logoSpotbec from "../img/logoSpotbec.png";

export class Connexion extends React.Component {
  constructor(props) {  
    super(props);  
    this.handleConnexion = this.handleConnexion.bind(this);  
  } 
  handleConnexion(){
    let connecter = false;

    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    if (email.toLowerCase() === "shany.carle@gmail.com" && pass === "patate"){
      connecter = true;
    } 
    this.props.onClick(connecter); 
  } 

  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <Row className="text-center">
            <Col>
              <h1 >SpotBec</h1>
              <img src={logoSpotbec} alt="Spotbec" width="" className="text-center"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"/>
                </Form.Group>

                <Button variant="secondary" onClick={this.handleConnexion}>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container> 
      </Jumbotron>
      
    );
  }
}