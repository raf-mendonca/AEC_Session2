import React from "react";
import { Container, Row } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import arpoador from "../../assets/arpoador.jpg";
import barra from "../../assets/barra.jpg";
import recreio from "../../assets/recreio.jpg";
import tracking_gavea from "../../assets/tracking_gavea.jpg";
import beauport from "../../assets/beauport.jpg";

export default function Photos() {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={arpoador} alt="First slide" />
              <Carousel.Caption>
                <h3>Arpoador Beach</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={barra} alt="Second slide" />
              <Carousel.Caption>
                <h3>Barra da Tijuca</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={recreio} alt="Third slide" />
              <Carousel.Caption>
                <h3>Recreio dos Bandeirantes Beach</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={tracking_gavea}
                alt="Fourth slide"
              />
              <Carousel.Caption>
                <h3>Pedra da Gavea 800m - Mountain</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={beauport}
                alt="Fourth slide"
              />
              <Carousel.Caption>
                <h3>Beauport Beach</h3>
                <p>
                  À cause de la COVID-19 nous nous réjouirons à Beauport Beach
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </>
  );
}
