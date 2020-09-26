import React from "react";
import { Link } from "react-router-dom";
import { Card, CardGroup, Col } from "react-bootstrap";
import '../App.sass';


export class Rapports extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
     <Col xs={12} sm={6} lg={6}> 
        <CardGroup>
            <Card className="rounded-0 bg-white mt-3 shadow mb-5"> 
              <Card.Img className="img-fluid rounded-0" variant="top" src={this.props.photo} />       
              <Card.Body>
                <Link to={"Rapports/"+ this.props.titre + "?id=" + this.props.id}>
                    <Card.Subtitle><h4>{this.props.nom}</h4> </Card.Subtitle>
                    <p>{this.props.titre} <br></br><p className="text-danger ">Editer</p></p>                    
                    <Card.Text className="text-justify">{this.props.rapport_voyage}</Card.Text>
                </Link>
              </Card.Body>
            </Card>
        </CardGroup> 
      </Col>       
    );
  }
}