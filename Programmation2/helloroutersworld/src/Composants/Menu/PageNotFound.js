import React from "react";
import { Container, Row } from "react-bootstrap";

export class PageNotFound extends React.Component {
  render() {
    return (
      <Container>
          <Row className="justify-content-center">
             <img src={require("../../assets/not_found.jpg")} /> 
          </Row>        
      </Container>
    );
  }
}