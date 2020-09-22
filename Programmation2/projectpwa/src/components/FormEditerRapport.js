import React , {useState , useEffect} from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import {Redirect} from "react-router-dom";
import { API } from '../constantes.js';
import {toast} from "react-toastify";
import '../App.sass';

function FormEditerRapports(props){
  const [donneesRecues , setDonneesRecues] = useState({titre: '',utilisateur: '', picture: '', rapport : '' });
  const [rapportID , setRapportID] = useState(props.location.search.substring(4,props.location.search.length));
  const [photos , setPhotos] = useState("");
  //Ajout de la gestion des erreurs
  useEffect(() => {
    getRapportInfos();
  },[]); //Si on enlève le second paramètre, on obtient une boucle infinie.

  //On récupère le Pokemon pour ensuite remplir le formulaire.
  async function getRapportInfos() {
    try {
      
      const response = await fetch(API+rapportID);
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function editRapport(titre,nom,photo,rapport_voyage) { 
    try{ 
      const response = await fetch(API + rapportID, { 
        method:'PUT', 
        headers: {'Content-Type': 'application/json'  }, 
        body:JSON.stringify({
            theme: titre,
            utilisateur: nom,            
            picture: photo,
            rapport: rapport_voyage        
        }) 
      }); 
      if(response.ok){ 
        props.history.push("/");
        toast.success("Modification du Rapport de Voyage " + titre);

        return response; 
      } 
      throw new Error('Request failed!'); 
  } 
   catch(error){ 
      console.log(error); 
   } 
}

async function removeRapport() { 
    try{ 
    const response = await fetch(API + rapportID, { 
      method:'delete', 
    }); 
    if(response.ok){      
      props.history.push("/");
      toast.error("Supression du Rapport de Voyage ");
      return response; 
    } 
    throw new Error('Request failed!'); 
} 
 catch(error){ 
    console.log(error); 
 } 
}

  function handleEdit(event){
    event.preventDefault();
    
    const titre = document.getElementById('titreRapport').value;
    const nom = document.getElementById('nomRapport').value;
    const photo = document.getElementById('photoRapport').value;
    const rapport_voyage = document.getElementById('rapport_voyageRapport').value;

    editRapport(titre,nom,photo,rapport_voyage);
  }

  function handlePhoto(event){
    const photos = document.getElementById('photoRapport').value;
    setPhotos(photos);
  }
    return (
      <>
      <Container>
        <Row>
          <Col>
            <Form className="custom">
              <Form.Group controlId="titreRapport">
                <Form.Label>Titre</Form.Label>
                <Form.Control  className="rounded-0" type="text" defaultValue={donneesRecues.theme}/> {/*/ Faire le test avec value*/}
              </Form.Group>
              <Form.Group controlId="nomRapport">
                <Form.Label>Nom du utilisateur</Form.Label>
                <Form.Control className="rounded-0" type="text" defaultValue={donneesRecues.utilisateur}/> {/*/ Faire le test avec value*/}
              </Form.Group>
              <Form.Group controlId="photoRapport">
                <Form.Label>URL d'une photo de la destination</Form.Label>
                <Form.Control className="rounded-0" type="text" placeholder="Entrer une URL valide" onBlur={handlePhoto} defaultValue={donneesRecues.picture}/>
              </Form.Group>
              {donneesRecues.picture !== "" && <Image src={donneesRecues.picture} rounded-0 width="300"/>}
              <Form.Group controlId="rapport_voyageRapport">
                <Form.Label>Décrivez votre expérience de voyage</Form.Label>
                <Form.Control className="rapport rounded-0" type="textarea" placeholder="Entrer votre expérience de voyage." defaultValue={donneesRecues.rapport}/>
              </Form.Group>
             
            <Button className="rounded-0" variant="primary" type="submit" onClick={handleEdit}>
                Enregistrer
            </Button>
            </Form>  
            </Col>    
          </Row>
          <p className="btn btn-danger mt-5 rounded-0" onClick={removeRapport}>Supprimer Rapport de voyage</p>
        </Container>
      </>
    );
  }

  export default FormEditerRapports;