import React from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import {Redirect} from "react-router-dom";
import {API} from "../constantes";
import {toast} from "react-toastify";

export class FormAjoutRappVoyage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {photo: "", setErrors : {}};

    this.handleAdd = this.handleAdd.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.addRapport = this.addRapport.bind(this); //addPokemon
  }

  async addRapport(titre, imageURL, local, rapporVoyage) { 
    try{ 
      const response = await fetch(API, { 
        method:'POST', 
        headers: {'Content-Type': 'application/json'  }, 
        body:JSON.stringify({
          titre: titre,
          imageURL: imageURL,
          rapporVoyage: rapporVoyage,
          nouvelle: local 
        }) 
      }); 
      if(response.ok){ 
        const jsonResponse = await response.json(); 
        this.props.history.push("/");
        toast.success("Ajout du Rapport " + titre);

        return jsonResponse; 
      } 
      throw new Error('Request failed!'); 
  } 
   catch(error){ 
      console.log(error); 
   } 
}


  handleAdd(event){
    event.preventDefault();
    
    const titre = document.getElementById('titre').value;
    const imageURL = document.getElementById('imageURL').value;
    const nouvelle = document.getElementById('nouvelle').value;
    const rapporVoyage = document.getElementById('rapporVoyage').value;

    this.addRapport(titre,  imageURL, nouvelle, rapporVoyage);
  }

  handlePhoto(event){
    const photos = document.getElementById(' imageURL').value;
    this.setState( { imageURL : photos});
  }


  render() {
    console.log(this.props.history);
    return (
      <>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="titre">
                <Form.Label>Titre rapport de voyage</Form.Label>
                <Form.Control type="text" placeholder="Entrer le titre" />
              </Form.Group>
              <Form.Group controlId="photoPokemon">
                <Form.Label>URL d'une photo de la destination</Form.Label>
                <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={this.handlePhoto}/>
              </Form.Group>
              {this.state.imageURL !== "" && <Image src={this.state.imageURL} rounded width="125"/>}
              <Form.Group controlId="nouvelle">
                <Form.Label>Local</Form.Label>
                <Form.Control type="text" placeholder="Entrer le nom de votre destination de voyage" />
              </Form.Group>
              <Form.Group controlId="rapporVoyage">
                <Form.Label>Racontez votre histoire de voyage</Form.Label>
                <Form.Control type="text" placeholder="Entrer votre rapport de voyage" />
              </Form.Group>

            <Button variant="primary" type="submit" onClick={this.handleAdd}>
                Enregistrer
            </Button>
            </Form>  
            </Col>    
          </Row>
        </Container>
      </>
    );
  }
}