import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Albums } from "./Albums";
import { AlbumDetails } from "./AlbumDetails";
import Modal from "react-bootstrap/Modal";
import ModalDialog from 'react-bootstrap/ModalDialog'
import { Paroles } from "./Paroles";

// album = {
//   src: require("../img/arcade-fire.jpg"),
//   artiste: "Arcade Fire",
//   nomAlbum: "Funeral",
//   musiques: [
//     { nomMusique: "Rebellion (Lies)", parole: "akljsdlfjalsdj" },
//     { nomMusique: "Rebellion (Lies)", parole: "akljsdlfjalsdj" },
//   ],
// }
// album.src
// album.artiste
// album.nomAlbum
// album.musiques[0].nomMusique
// album.musiques[0].parole
// album.musiques[1].nomMusique
// album.musiques[1].parole

//Déclaration des objets
const liste = [
  {
    src: require("../img/arcade-fire.jpg"),
    artiste: "Arcade Fire",
    nomAlbum: "Funeral",
    musiques: [
      { nomMusique: "Rebellion (Lies)", parole: "Sleeping is giving in\
      No matter what the time is\
      Sleeping is giving in\
      So lift those heavy eyelids\
      People say that you'll die faster than without water\
      But we know it's just a lie\
      Scare your son, scare your daughter\
      People say that your dreams are the only things that save ya\
      Come on, baby, in our dreams\
      We can live our misbehavior\
      Every time you close your eyes (lies, lies)\
      Every time you close your eyes (lies, lies)\
      Every time you close your eyes (lies, lies)\
      Every time you close your eyes (lies, lies)\
      Every time you close your eyes\
      Every time you close your eyes\
      Every time you close your eyes\
      Every time you close your eyes\
      People try and hide the night underneath the covers\
      People try and hide the light underneath the covers\
      Come on hide your lovers\
      Underneath the covers\
      Come on hide your lovers\
      Underneath the covers\
      Hidin' from your brothers underneath the covers\
      Come on hide your lovers underneath the covers\
      People say that you'll die faster than without water\
      But we know it's just a lie\
      Scare your son, scare your daughter\
      Scare your son, scare your daughter\
      Scare your son, scare your daughter\
      Now here's the sun, it's alright (lies, lies)\
      Now here's the moon, it's alright (lies, lies)\
      Now here's the sun, it's alright (lies, lies)\
      Now here's the moon, it's alright (lies, lies)\
      But every time you close your eyes (lies, lies)\
      Every time you close your eyes (lies, lies)\
      Every time you close your eyes (lies, lies)\
      Every time you close your eyes (lies, lies)\
      Every time you close your eyes\
      (Lies, lies)" },

      { nomMusique: "Neighborhood #1 (Tunnels)", parole: "And if the snow buries my, my neighborhood\
      And if my parents are crying\
      Then I'll dig a tunnel from my window to yours\
      Yeah, a tunnel from my window to yours\
      You climb out the chimney\
      And meet me in the middle, the middle of the town\
      And since there's no one else around\
      We let our hair grow long\
      And forget all we used to know\
      Then our skin gets thicker from\
      Living out in the snow\
      You change all the lead\
      Sleepin' in my head\
      As the day grows dim\
      I hear you sing a golden hymn\
      Then we tried to name our babies\
      But we forgot all the names that\
      The names we used to know\
      But sometimes, we remember our bedrooms\
      And our parents' bedrooms\
      And the bedrooms of our friends\
      Then we think of our parents\
      Well what ever happened to them?\
      You change all the lead\
      Sleepin' in my head to gold\
      As the day grows dim\
      I hear you sing a golden hymn\
      The song I've been trying to sing\
      Purify the colors, purify my mind\
      Purify the colors, purify my mind\
      And spread the ashes of the colors\
      Over this heart of mine"},
      
      { nomMusique: "Neighborhood #2 (Tunnels)", parole: "akljsdlfjalsdj" },
      { nomMusique: "Neighborhood #3 (Tunnels)", parole: "akljsdlfjalsdj" },
      { nomMusique: "Neighborhood #4 (Tunnels)", parole: "akljsdlfjalsdj" },
      { nomMusique: "Une année sans lumière", parole: "akljsdlfjalsdj" },
      { nomMusique: "Haiti", parole: "akljsdlfjalsdj" },
      { nomMusique: "Crown of Love", parole: "akljsdlfjalsdj" },
      { nomMusique: "Wake Up", parole: "akljsdlfjalsdj" },
      { nomMusique: "In the Backseat", parole: "akljsdlfjalsdj" },
    ],
  },
  {
    src: require("../img/alfa-rococo.jpg"),
    artiste: "Alfa Rococo",
    nomAlbum: "Léver l'ancre",
    musiques: [
      { nomMusique: "Les Jours De Pluie", parole: "akljsdlfjalsdj" },
      { nomMusique: "Lever L'Ancre", parole: "akljsdlfjalsdj" },
      { nomMusique: "Je Pense A Toi", parole: "akljsdlfjalsdj" },
      { nomMusique: "Confiture Verte", parole: "akljsdlfjalsdj" },
      { nomMusique: "Paradis Artificiel", parole: "akljsdlfjalsdj" },
      { nomMusique: "Peau De Chagrin", parole: "akljsdlfjalsdj" },
      { nomMusique: "Horribles Gens", parole: "akljsdlfjalsdj" },
      { nomMusique: "Plus Rien A Faire", parole: "akljsdlfjalsdj" },
      { nomMusique: "Le Laboratoire", parole: "akljsdlfjalsdj" },
      { nomMusique: "La Fenêtre", parole: "akljsdlfjalsdj" },
      { nomMusique: "Véga", parole: "akljsdlfjalsdj" },
    ],
  },
  {
    src: require("../img/ariane-moffat.jpg"),
    artiste: "Ariane Moffat",
    nomAlbum: "Le Coeur Dans La Tête",
    musiques: [
      { nomMusique: "Combustion Lente", parole: "akljsdlfjalsdj" },
      { nomMusique: "Se Perdre", parole: "akljsdlfjalsdj" },
      { nomMusique: "Le Coeur Dans La Tête", parole: "akljsdlfjalsdj" },
      { nomMusique: "Montréal", parole: "akljsdlfjalsdj" },
      { nomMusique: "Retourne", parole: "akljsdlfjalsdj" },
      { nomMusique: "Farine 5 Roses", parole: "akljsdlfjalsdj" },
      { nomMusique: "Imparfait", parole: "akljsdlfjalsdj" },
      { nomMusique: "Will You Follow Me", parole: "akljsdlfjalsdj" },
      { nomMusique: "Terminus", parole: "akljsdlfjalsdj" },
      { nomMusique: "Valentine", parole: "akljsdlfjalsdj" },
      { nomMusique: "Histoire D'Ére", parole: "akljsdlfjalsdj" },
      { nomMusique: "(silence)", parole: "akljsdlfjalsdj" },
      { nomMusique: "Laboratoire Amoureux", parole: "akljsdlfjalsdj" },

    ],
  },
  {
    src: require("../img/jean-leloup.jpg"),
    artiste: "Jean Leloup",
    nomAlbum: "Paradis city",
    musiques: [
      { nomMusique: "Paradis City", parole: "akljsdlfjalsdj" },
      { nomMusique: "Willie", parole: "akljsdlfjalsdj" },
      { nomMusique: "Les Flamants Roses", parole: "akljsdlfjalsdj" },
      { nomMusique: "Petit Papillon", parole: "akljsdlfjalsdj" },
      { nomMusique: "Les Bateaux", parole: "akljsdlfjalsdj" },
      { nomMusique: "Feuille Au Vent", parole: "akljsdlfjalsdj" },
      { nomMusique: "Voyageur", parole: "akljsdlfjalsdj" },
      { nomMusique: "Retour à La Maison", parole: "akljsdlfjalsdj" },
      { nomMusique: "Le Roi Se Meurt", parole: "akljsdlfjalsdj" },
      { nomMusique: "Zone Zéro", parole: "akljsdlfjalsdj" },
    ],
  },
  {
    src: require("../img/lisa-leblanc.jpg"),
    artiste: "Lisa LeBlanc",
    nomAlbum: "Lisa LeBlanc",
    musiques: [
      { nomMusique: "Cerveau Ramolli", parole: "akljsdlfjalsdj" },
      { nomMusique: "Du Duvet Dans Les Poches", parole: "akljsdlfjalsdj" },
      { nomMusique: "Motel", parole: "akljsdlfjalsdj" },
      { nomMusique: "Juste Parce Que J'peux", parole: "akljsdlfjalsdj" },
      { nomMusique: "Câlisse-moi Là", parole: "akljsdlfjalsdj" },
      { nomMusique: "J'pas Un Cowboy", parole: "akljsdlfjalsdj" },
      { nomMusique: "Chanson D'une Rouspéteuse", parole: "akljsdlfjalsdj" },
      { nomMusique: "Lignes D'Hydro", parole: "akljsdlfjalsdj" },
      { nomMusique: "Y Fait Chaud", parole: "akljsdlfjalsdj" },
      { nomMusique: "Avoir Su", parole: "akljsdlfjalsdj" },
      { nomMusique: "Kraft Dinner", parole: "akljsdlfjalsdj" },
      { nomMusique: "J't'écris Une Chanson D'amour", parole: "akljsdlfjalsdj" },
      { nomMusique: "Aujourd'hui, Ma Vie C'est D'la Marde", parole: "akljsdlfjalsdj" },
    ],
  },
  {
    src: require("../img/caveboy.jpg"),
    artiste: "Caveboy",
    nomAlbum: "Kiss in the park",
    musiques: [
      { nomMusique: "Silk For Gold", parole: "akljsdlfjalsdj" },
      { nomMusique: "I Wonder", parole: "akljsdlfjalsdj" },
      { nomMusique: "Hide Your Love", parole: "akljsdlfjalsdj" },
      { nomMusique: "Lifetime", parole: "akljsdlfjalsdj" },
      { nomMusique: "N.Y.P.", parole: "akljsdlfjalsdj" },
      { nomMusique: "Find Me", parole: "akljsdlfjalsdj" },
      { nomMusique: "Obsessed", parole: "akljsdlfjalsdj" },
      { nomMusique: "Guess I've Changed", parole: "akljsdlfjalsdj" },
      { nomMusique: "Landslide", parole: "akljsdlfjalsdj" },
      { nomMusique: "Up In Flames", parole: "akljsdlfjalsdj" },
    ],
  },
  {
    src: require("../img/mes-aieux.jpg"),
    artiste: "Mes aieux",
    nomAlbum: "Tire-toi une bûche",
    musiques: [
      { nomMusique: "	La Lettre", parole: "akljsdlfjalsdj" },
      { nomMusique: "Dégénérations", parole: "akljsdlfjalsdj" },
      { nomMusique: "	Nous Sommes", parole: "akljsdlfjalsdj" },
      { nomMusique: "	Mononcle Prémi", parole: "akljsdlfjalsdj" },
      { nomMusique: "	La Corrida de la Corriveau", parole: "akljsdlfjalsdj" },
      { nomMusique: "	Train de vie (Le Surcheval)", parole: "akljsdlfjalsdj" },
      { nomMusique: "	L'héritage", parole: "akljsdlfjalsdj" },
      { nomMusique: "	En vérité", parole: "akljsdlfjalsdj" },
      { nomMusique: "	Descendus au chantier", parole: "akljsdlfjalsdj" },
      { nomMusique: "	Remède miracle", parole: "akljsdlfjalsdj" },
      { nomMusique: "	Qui nous mène?", parole: "akljsdlfjalsdj" },
      { nomMusique: "	Swigne la bacaisse", parole: "akljsdlfjalsdj" },
    ],
  },
  {
    src: require("../img/celine-dion.jpg"),
    artiste: "Celine Dion",
    nomAlbum: "The essential",
    musiques: [
      { nomMusique: "My Heart Will Go On", parole: "akljsdlfjalsdj" },
      { nomMusique: "Think Twice", parole: "akljsdlfjalsdj" },
      { nomMusique: "It's All Coming Back To Me Now", parole: "akljsdlfjalsdj" },
      { nomMusique: "A New Day Has Come", parole: "akljsdlfjalsdj" },
      { nomMusique: "My Love", parole: "akljsdlfjalsdj" },
      { nomMusique: "Taking Chances", parole: "akljsdlfjalsdj" },
      { nomMusique: "That's The Way It Is", parole: "akljsdlfjalsdj" },
      { nomMusique: "The Power Of Love", parole: "akljsdlfjalsdj" },
      { nomMusique: "Because You Loved Me", parole: "akljsdlfjalsdj" },
      { nomMusique: "Falling Into You", parole: "akljsdlfjalsdj" },
      { nomMusique: "I Drove All Night", parole: "akljsdlfjalsdj" },
      { nomMusique: "I'm Alive", parole: "akljsdlfjalsdj" },
      { nomMusique: "All By Myself", parole: "akljsdlfjalsdj" },
      { nomMusique: "Alone", parole: "akljsdlfjalsdj" },
      { nomMusique: "Immortality", parole: "akljsdlfjalsdj" },
    ],
  },
];

export class Catalogue extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rechercher: "", listeAlbums: liste, cestDansAlbum: false , montrerParole: false};
    this.Rechercher = this.Rechercher.bind(this);
    this.Effacer = this.Effacer.bind(this);
    this.HandleAlbum = this.HandleAlbum.bind(this);
    this.CacherAlbum = this.CacherAlbum.bind(this);
    this.HandleParole = this.HandleParole.bind(this);
    this.CacherParole = this.CacherParole.bind(this);
  }

  HandleAlbum(index) {
    console.log(this.state.listeAlbums[index].nomAlbum);
    this.setState({
      cestDansAlbum: true,
      album: this.state.listeAlbums[index],

      montrerParole: true,
      album: this.state.listeAlbums[index],
    });
  }

  HandleParole(index) {
    console.log(this.state.listeAlbums[index].parole);
    this.setState({
      montrerParole: true,
      album: this.state.listeAlbums[index],
    });
  }


  Rechercher() {
    let nom = document.getElementById("inputRechercher").value;
    this.setState({ rechercher: nom });
  }
  Effacer() {
    document.getElementById("inputRechercher").value = "";
    this.setState({ rechercher: "" });
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
                <Button variant="outline-secondary" onClick={this.Rechercher}>
                  Rechercher
                </Button>
              </InputGroup.Append>
              <InputGroup.Append>
                <Button variant="outline-secondary" onClick={this.Effacer}>
                  Annuler
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </Row>
        
        
        <Row>
          <h2 className="Display-4 m-3">Albums</h2>
        </Row>        
        <Row>
          
            <Modal.Dialog className="special_modal">
              {this.state.cestDansAlbum && <div><AlbumDetails album={this.state.album} />
              <Button variant="secondary" onClick={this.CacherAlbum}>Précédent</Button></div> } 
            </Modal.Dialog>

            <Modal.Dialog className="special_modal">
              {this.state.montrerParole && <div><Paroles album={this.state.album} />
                <Button variant="secondary" onClick={this.CacherParole}>Précédent</Button></div> } 
            </Modal.Dialog>
          
          
        </Row>
        <Row>
          
        </Row>
        <Row>
          {this.AfficherAlbums()}
        </Row>
      </Container>
    );
  }

  CacherAlbum() {
    this.setState({
      cestDansAlbum: false
    });
  }

  CacherParole() {
    this.setState({
      montrerParole: false
    });
  }

  AfficherAlbums() {

    if (this.state.rechercher === "") {

      // Chaque fois que l'utilisateur clique sur l'album, il envoie l'index à HandleAlbum
      return this.state.listeAlbums.map((element, i) => (
        <div onClick={(e) => this.HandleAlbum(i)}>
          <Albums
            className=""
            key={"perso" + i}
            src={element.src}
            artiste={element.artiste}
            nomAlbum={element.nomAlbum}
            
          ></Albums>
        </div>
      ));
    } else {
      const searchResult = this.state.listeAlbums.filter((album) => {
        const nomArtiste = album.artiste.toLowerCase();
        const nomAlbum = album.nomAlbum.toLowerCase();
        const rechercheString = this.state.rechercher.toLowerCase();
        return (
          nomArtiste.includes(rechercheString) ||
          nomAlbum.includes(rechercheString)
        );
      });
      return searchResult.map((element, i) => (
        <div onClick={(e) => this.HandleAlbum(i)}>
          <Albums
            className=""
            key={"perso" + i}
            src={element.src}
            artiste={element.artiste}
            nomAlbum={element.nomAlbum}
            
          ></Albums>
        </div>
      ));
    }
  }
}
