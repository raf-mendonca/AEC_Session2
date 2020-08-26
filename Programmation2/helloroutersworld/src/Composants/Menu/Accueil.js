import React from "react";
import { Container, Row } from "react-bootstrap";
import rio from "../../assets/rio.jpg";

export class Accueil extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Row className='text-justify lead justify-content-center'>
            <h1>Voyage au Rio - Brésil</h1>
            <p>
              Rio de Janeiro, souvent désignée simplement sous le nom de Rio (on
              disait aussi Riogénaire en français au xixe siècle3), est la
              deuxième plus grande ville du Brésil après São Paulo. Située dans
              le Sud-Est du pays, elle est la capitale de l'État de Rio de
              Janeiro. Avec ses 6,1 millions d'habitants intra-muros
              (communément appelés Cariocas, la variante Carioques existant
              aussi en français) et 12,62 millions dans l'aire urbaine, Rio de
              Janeiro est l'une des métropoles les plus importantes du continent
              américain. Elle est mondialement connue pour son carnaval, ses
              plages (Copacabana, Leblon et Ipanema) ainsi que sa statue du
              Christ Rédempteur au sommet du Corcovado. Elle fut capitale du
              Royaume-Uni de Portugal, du Brésil et des Algarves, à la suite de
              la fuite de la cour portugaise lors de l'invasion des troupes
              napoléoniennes (1808-1821), puis de l'Empire du Brésil
              (1822-1889), de la República Velha (1889-1930), de l’Estado Novo
              (1937-1945) et du début de la Deuxième République jusqu'en 1960.
              La ville a accueilli les Journées mondiales de la jeunesse 2013,
              les finales des Coupes du monde de football de 1950 et de 2014 et
              enfin, en 2016, les Jeux olympiques d'été.
            </p>
            <img className="d-block w-100" src={rio} alt="Rio de Janeiro" />
          </Row>
        </Container>
      </>
    );
  }
}
