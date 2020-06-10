import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export class Albums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hovered: false};
  }

  render() {
    return (
      <Col md lg="3">          
        <Card style={{ width: '12rem', backgroundColor: '#282c34',}} className="fluid">
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
  }
}
