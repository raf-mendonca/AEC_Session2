import React from "react";
import { Container, Row } from "react-bootstrap";
import YouTube from "react-youtube";

//https://www.youtube.com/watch?v=fA7kQn-l6T4
//https://youtu.be/fA7kQn-l6T4
//export class Accueil extends React.Component
export class Video extends React.Component {
  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
    console.log(event.target);
  }
  render() {
    const opts = {
      height: "700",
      width: "1000",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <Container>
        <Row className='justify-content-center'>
          <YouTube
            videoId="fA7kQn-l6T4"
            opts={opts}
            videoOnReady={this.videoOnReady}
          />
        </Row>
      </Container>
    );
  }
}
