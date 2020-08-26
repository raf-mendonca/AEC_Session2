import React from "react";
import { Container, Row } from "react-bootstrap";

export class Carte extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470398.2198592507!2d-43.726885427057404!3d-22.91388380261005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20State%20of%20Rio%20de%20Janeiro%2C%20Brazil!5e0!3m2!1sen!2sca!4v1593733521017!5m2!1sen!2sca"
              width="800"
              height="500"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </Row>
        </Container>
      </>
    );
  }
}

export default Carte;
