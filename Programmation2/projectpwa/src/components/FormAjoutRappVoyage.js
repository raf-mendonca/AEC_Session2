import React from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import {Redirect} from "react-router-dom";
import { API } from '../constantes.js';
import {toast} from "react-toastify";

export class FormAjoutRappVoyage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {photo: "", setErrors : {}};

    this.handleAdd = this.handleAdd.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.addPokemon = this.addRapport.bind(this);
  }

  async addRapport(nom,titre,photo, rapport_voyage) { 
    try{ 
      const response = await fetch(API, { 
        method:'POST', 
        headers: {'Content-Type': 'application/json'  }, 
        body:JSON.stringify({
            theme: titre,
            utilisateur: nom,            
            picture: photo,
            rapport: rapport_voyage          
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
    
    const titre = document.getElementById('titreRapport').value;
     const nom = document.getElementById('nomRapport').value;
    const photo = document.getElementById('photoRapport').value;
    const rapport_voyage = document.getElementById('rapport_voyageRapport').value;

    this.addRapport(titre,nom,photo,rapport_voyage);
  }

  handlePhoto(event){
    const photos = document.getElementById('photoRapport').value;
    this.setState( {photo : photos});
  }


  render() {
    console.log(this.props.history);
    return (
      <>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="titreRapport">
                <Form.Label>Titre</Form.Label>
                <Form.Control type="text" placeholder="Entrer le titre du Rapport de voyage" />
              </Form.Group>
              <Form.Group controlId="nomRapport">
                <Form.Label>Nom du utilisateur</Form.Label>
                <Form.Control type="text" placeholder="Entrer votre nom" />
              </Form.Group>
              <Form.Group controlId="photoRapport">
                <Form.Label>URL d'une photo de la destination</Form.Label>
                <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={this.handlePhoto}/>
              </Form.Group>
              {this.state.photo !== "" && <Image src={this.state.photo} rounded width="125"/>}
              <Form.Group controlId="rapport_voyageRapport">
                <Form.Label>Décrivez votre expérience de voyage</Form.Label>
                <Form.Control type="text" placeholder="Entrer votre expérience de voyage." />
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