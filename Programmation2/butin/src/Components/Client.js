import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export class Client extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Col md lg="2">
        <Card>
          <Card.Img variant="top" src={this.props.src} width={180} height={250}/>
          <Card.Body>
              <Card.Title>{this.props.nom}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{this.props.travail}</Card.Subtitle>
          </Card.Body>
          <ListGroup className="list-group-flush">
          <ListGroupItem>
            <a href="mailto:Vivaldi.Vivaldi@gmail.com">
                {this.props.nom.split(" ")[0]}.
                {this.props.nom.split(" ")[1]}@gmail.com
            </a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="tel:+1-888-888-8888">+1 (888) 888-8888</a>
          </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    );
  }
}