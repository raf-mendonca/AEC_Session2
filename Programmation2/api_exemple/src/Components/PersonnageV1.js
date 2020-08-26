import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export class PersonnageV1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data : []};
  }

  componentDidMount(){
    fetch('https://swapi.dev/api/people/1/')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render() {
    console.log(this.state.data);
    return (
     
      <Container>
        <Row>
            {this.state.data.name}
            {this.state.data.height}
            {this.state.data.films}
        </Row>
      </Container>
      
      
      
      
     
    );
  }
}