import React from "react";
import { Link } from "react-router-dom";
import { Card, CardGroup, Col } from "react-bootstrap";
import ParticlesBg from "particles-bg";
import '../App.sass';


export class Rapports extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let config = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-40, 40],
      // body: "./img/icon.png", // Whether to render pictures
      // rotate: [0, 20],
      alpha: [0.6, 0],
      scale: [1, 0.1],
      position: "center", // all or center or {x:1,y:1,width:100,height:100}
      color: ["random", "#407294"],
      cross: "dead", // cross or bround
      random: 15,  // or null,
      g: 5,    // gravity
      // f: [2, -1], // force
      onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();
          ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
      }
    };


    return ( 
      <Col xs={12} sm={6} lg={6}>    
        <CardGroup><ParticlesBg type="square" config={config} bg={true}/>    
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