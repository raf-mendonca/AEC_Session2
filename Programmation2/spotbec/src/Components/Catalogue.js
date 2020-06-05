import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Albums } from "./Albums";

const liste = [
    {
        src: require("../img/arcade-fire.jpg"),
        nom: "Arcade Fire",
        album: "Funeral",
    },
    {
        src: require("../img/alfa-rococo.jpg"),
        nom: "Alfa Rococo",
        album: "Léver l'ancre",
    },
    {
        src: require("../img/ariane-moffat.jpg"),
        nom: "Ariane Moffat",
        album: "Aquanaute",
    },
    {
        src: require("../img/jean-leloup.jpg"),
        nom: "Jean Leloup",
        album: "Paradis city",
    },
    {
        src: require("../img/lisa-leblanc.jpg"),
        nom: "Lisa LeBlanc",
        album: "Lisa LeBlanc",
    },
    {
        src: require("../img/caveboy.jpg"),
        nom: "Caveboy",
        album: "Kiss in the park",
    },
    {
        src: require("../img/mes-aieux.jpg"),
        nom: "Mes aieux",
        album: "Dégéneration",
    },
    {
        src: require("../img/celine-dion.jpg"),
        nom: "Celine Dion",
        album: "The essential",
    },
];

export class Catalogue extends React.Component {
    constructor(props) {
      super(props);
      this.state = {rechercher:"",
                    listeAlbums : liste};
      this.Rechercher = this.Rechercher.bind(this);
      this.Effacer = this.Effacer.bind(this);
    }
    Rechercher(){
      let nom = document.getElementById("inputRechercher").value;
      this.setState({rechercher:nom});
    }
    Effacer(){
      document.getElementById("inputRechercher").value = "";
      this.setState({rechercher:""});
    }
    render() {
      return (
      
        <Container>
          <Row>
          <Form>
          <InputGroup size="sm" className="mb-3">
            <FormControl
              id="inputRechercher"
              placeholder="Rechercher"
              aria-label="Rechercher"
              aria-describedby="Rechercher"
              onChange={this.Rechercher}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={this.Rechercher}>Rechercher</Button>
            </InputGroup.Append>
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={this.Effacer}>Annuler</Button>
            </InputGroup.Append>
          </InputGroup>
    
          </Form>
          </Row>
          <Row>
            <h2 className="Display-4 m-3">Albums</h2>
          </Row>
          <Row >
              {this.AfficherAlbums()}             
            </Row>
        </Container>
      );
    }
  
    AfficherAlbums() {
      if(this.state.rechercher === ""){
         return this.state.listeAlbums.map((element, i) => (
          <Albums className=""
            key={"perso" + i}
            src={element.src}
            nom={element.nom}
            album={element.album}
          ></Albums>
        ));
      }
      else{
        const searchResult = this.state.listeAlbums.filter(l => l.nom.toLowerCase().includes(this.state.rechercher.toLowerCase()));
        return searchResult.map((element, i) => (
            <Albums className=""
            key={"perso" + i}
            src={element.src}
            nom={element.nom}
            album={element.album}
          ></Albums>
        ));
      }
    }
  }