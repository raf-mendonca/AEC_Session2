import React , {useState , useEffect} from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import {Redirect} from "react-router-dom";
import {API} from "../constantes";
import {toast} from "react-toastify"

function FormEditerRapports(props){
  const [donneesRecues , setDonneesRecues] = useState({titre: "", imageURL: "", nouvelle : "", utilisateur: "", rapporVoyage: "" });
  const [voyageID , setVoyageID] = useState(props.location.search.substring(5,props.location.search.length));
  const [images , setImage] = useState("");
  //Ajout de la gestion des erreurs
  useEffect(() => {
    getVoyageInfos();
  },[]); //Si on enlève le second paramètre, on obtient une boucle infinie.

  //On récupère le Pokemon pour ensuite remplir le formulaire.
  async function getVoyageInfos() {
    try {
      
      const response = await fetch(API + voyageID);
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function editVoyage(titre,image,nouvelle,utilisateur,rapporVoyage) { 
    try{ 
      const response = await fetch(API + voyageID, { 
        method:'PUT', 
        headers: {'Content-Type': 'application/json'  }, 
        body:JSON.stringify({
          titre: titre,
          imageURL: image,
          utilisateur: utilisateur,
          rapporVoyage: rapporVoyage
          }) 
      }); 
      if(response.ok){ 
        props.history.push("/");
        toast.success("Modification de voyage" + titre);

        return response; 
      } 
      throw new Error('Request failed!'); 
  } 
   catch(error){ 
      console.log(error); 
   } 
}

async function removeVoyage() { 
    try{ 
    const response = await fetch(API + voyageID, { 
      method:'delete', 
    }); 
    if(response.ok){ 
      //const jsonResponse = await response.json(); 
      props.history.push("/");
      toast.error("Supression de voyage ");

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
    
    const titre = document.getElementById('titreVoyage').value;
    const image = document.getElementById('imageVoyage').value;
    const nouvelle = document.getElementById('destinationVoyage').value;
    const utilisateur = document.getElementById('utilisateurVoyage').value;
    const rapporVoyage = document.getElementById('rapportVoyage').value;

   editVoyage(titre,image,nouvelle,utilisateur,rapporVoyage);
  }

  function handlePhoto(event){
    const images = document.getElementById('imageVoyage').value;
    setImage(images);
  }
    return (
      <>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="titreVoyage">
                <Form.Label>Titre voyage</Form.Label>
                <Form.Control type="text" defaultValue={donneesRecues.titre}/> {/*/ Faire le test avec value*/}
              </Form.Group>
              <Form.Group controlId="imageVoyage">
                <Form.Label>URL d'une photo de la destination</Form.Label>
                <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={handlePhoto} defaultValue={donneesRecues.imageURL}/>
              </Form.Group>
              {donneesRecues.imageURL !== "" && <Image src={donneesRecues.imageURL} rounded width="125"/>}
              <Form.Group controlId="destinationVoyage">
                <Form.Label>Destination</Form.Label>
                <Form.Control type="text" placeholder="Ex: New York, Ny, USA"  defaultValue={donneesRecues.nouvelle}/>
              </Form.Group>
              <Form.Group controlId="utilisateurVoyage">
                <Form.Label>Nom de l'utilisateur</Form.Label>
                <Form.Control type="text" placeholder="Entrer le nom de l'utisateur"  defaultValue={donneesRecues.utilisateur}/>
              </Form.Group>
              <Form.Group controlId="rapportVoyage">
                <Form.Label>Description de voyage</Form.Label>
                <Form.Control type="text" placeholder="Description de voyage" defaultValue={donneesRecues.rapporVoyage}/> {/*/ Faire le test avec value*/}
              </Form.Group>

            <Button variant="primary" type="submit" onClick={handleEdit}>
                Enregistrer
            </Button>
            </Form>  
            </Col>    
          </Row>
          <p className="btn btn-danger mt-5" onClick={removeVoyage}>Supprimer voyage</p>
        </Container>
      </>
    );
  }

  export default FormEditerRapports;