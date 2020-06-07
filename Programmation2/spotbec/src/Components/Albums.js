import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Connexion } from "./Connexion";


export class Albums extends React.Component {
  constructor(props) {
    super(props);
    this.handleAlbum = this.handleAlbum.bind(this);
    this.state = {hovered: false, cestDansAlbum: false};
    
  }

  handleAlbum(){
    alert ("Click happend");
    this.state.cestDansAlbum =  !this.state.cestDansAlbum;

  }
  
  test(){
    if(this.state.cestDansAlbum == false){
      return (
      <Col md lg="3">          
        <Card style={{ width: '12rem', backgroundColor: '#282c34',}} className="fluid" onClick={this.handleAlbum}>
          <Card.Img variant="top" src={this.props.src} width={200} height={200} 
            onMouseOut={() => this.setState({hovered: false})}
            onMouseOver={() => this.setState({hovered: true})}
            style={{transform: `${this.state.hovered ? 'scale(1.2,1.2)' : 'scale(1,1)'}`}}
            
          />
          <Card.Body>
              <Card.Title><p className="mb-2 text-muted">{this.props.nomAlbum}</p></Card.Title>
              <Card.Subtitle><p className="mb-2 text-muted small">{this.props.artiste}</p></Card.Subtitle>
          </Card.Body>

         
        </Card>
      </Col>
    );
    }else{
      return (
        
          <Connexion onClick={this.handleAlbum} />
      
      )
    }
  }

  render() {
    return (
      this.test()
    );
  }
}
