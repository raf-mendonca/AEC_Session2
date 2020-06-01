import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Client } from "./Client";

const liste = [
    {
        src: require("../img/vivaldi.jpg"),
        nom: "Antonio Vivaldi",
        travail: "Composeur musicien",
    },
    {
        src: require("../img/bach.jpg"),
        nom: "Johann Bach",
        travail: "Composeur musicien", 
    },
    {
        src: require("../img/mozart.jpg"),
        nom: "Amadeu Mozart",
        travail: "Composeur musicien",
      },
      {
        src: require("../img/brahms.jpg"),
        nom: "Johannes Brahms",
        travail: "Composeur musicien",
      },
      {
        src: require("../img/beethoven.jpg"),
        nom: "Ludwig Beethoven",
        travail: "Composeur musicien",
      },
      {
        src: require("../img/debussy.jpg"),
        nom: "Claude Debussy",
        travail: "Composeur musicien",
      },
      {
        src: require("../img/villalobos.jpg"),
        nom: "Villa Lobos",
        travail: "Composeur musicien",
      },
      {
        src: require("../img/puccini.jpg"),
        nom: "Giacomo Puccini",
        travail: "Composeur musicien",
      },
      {
        src: require("../img/verdi.jpg"),
        nom: "Giuseppe Verdi",
        travail: "Composeur musicien",
      },
      {
        src: require("../img/schumann.jpg"),
        nom: "Robert Schumann",
        travail: "Composeur musicien",
      },
      {
        src: require("../img/schubert.jpg"),
        nom: "Franz Schubert",
        travail: "Composeur musicien",
      },
      {
        src: require("../img/piazzolla.jpg"),
        nom: "Astor Piazzolla",
        travail: "Composeur musicien",
      },    

];

export class Bottin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rechercher:"",
                  listeClients : liste};
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
    
      <Container fluid>
        <Row>
        <Form>
        <InputGroup className="my-3 ml-3">
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
          <h2 className="Display-4 ml-3">Bottin des composeurs</h2>
        </Row>
        <Row>{this.AfficherBottin()}</Row>
      </Container>
    );
  }

  AfficherBottin() {
    if(this.state.rechercher === ""){
       return this.state.listeClients.map((element, i) => (
        <Client
          key={"perso" + i}
          src={element.src}
          nom={element.nom}
          travail={element.travail}
        ></Client>
      ));
    }
    else{
      const searchResult = this.state.listeClients.filter(l => l.nom.toLowerCase().includes(this.state.rechercher.toLowerCase()));
      return searchResult.map((element, i) => (
        <Client
          key={"perso" + i}
          src={element.src}
          nom={element.nom}
          travail={element.travail}
        ></Client>
      ));
    }
  }
}