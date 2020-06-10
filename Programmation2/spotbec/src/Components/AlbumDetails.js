import React from "react";
import Col from "react-bootstrap/Col";

export class AlbumDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { connecter: false };
  }

  afficherMusiques() {
    return this.props.album.musiques.map((element, i) => (
      <li>{element.nomMusique}</li>
    ));
  }

  render() {
    return (
      <div>
        
          <h1>{this.props.album.nomAlbum}</h1>
          <Col>
            <ul>
              {this.afficherMusiques()}
            </ul>
          </Col>
               
      </div>
    );
  }
}
