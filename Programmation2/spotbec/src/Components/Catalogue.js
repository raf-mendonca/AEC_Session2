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
        artiste: "Arcade Fire",
        nomAlbum: "Funeral",
    },
    {
        src: require("../img/alfa-rococo.jpg"),
        artiste: "Alfa Rococo",
        nomAlbum: "Léver l'ancre",
    },
    {
        src: require("../img/ariane-moffat.jpg"),
        artiste: "Ariane Moffat",
        nomAlbum: "Aquanaute",
    },
    {
        src: require("../img/jean-leloup.jpg"),
        artiste: "Jean Leloup",
        nomAlbum: "Paradis city",
    },
    {
        src: require("../img/lisa-leblanc.jpg"),
        artiste: "Lisa LeBlanc",
        nomAlbum: "Lisa LeBlanc",
    },
    {
        src: require("../img/caveboy.jpg"),
        artiste: "Caveboy",
        nomAlbum: "Kiss in the park",
    },
    {
        src: require("../img/mes-aieux.jpg"),
        artiste: "Mes aieux",
        nomAlbum: "Dégéneration",
    },
    {
        src: require("../img/celine-dion.jpg"),
        artiste: "Celine Dion",
        nomAlbum: "The essential",
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
            artiste={element.artiste}
            nomAlbum={element.nomAlbum}
          ></Albums>
        ));
      }
      else{        
        const searchResult = this.state.listeAlbums.filter( album => {
          const nomArtiste = album.artiste.toLowerCase();
          const nomAlbum = album.nomAlbum.toLowerCase();
          const rechercheString = this.state.rechercher.toLowerCase();
          return nomArtiste.includes(rechercheString) || nomAlbum.includes(rechercheString);
        });
        return searchResult.map((element, i) => (
            <Albums className=""
            key={"perso" + i}
            src={element.src}
            artiste={element.artiste}
            nomAlbum={element.nomAlbum}
          ></Albums>
        ));
      }
    }
  }