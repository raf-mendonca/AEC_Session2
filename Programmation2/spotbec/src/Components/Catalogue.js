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


//Déclaration des objets
const liste = [
  {
    src: require("../img/arcade-fire.jpg"),
    artiste: "Arcade Fire",
    nomAlbum: "Funeral",
    musiques: [
      { nomMusique: <a href="#">Rebellion (Lies)</a>, parole: "\Sleeping is giving in\
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

      { nomMusique: <a href="#">Neighborhood #1 (Tunnels)</a>, parole: "And if the snow buries my, my neighborhood\
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
      
      { nomMusique: "Neighborhood #2 (Tunnels)", parole: "" },
      { nomMusique: "Neighborhood #3 (Tunnels)", parole: "" },
      { nomMusique: "Neighborhood #4 (Tunnels)", parole: "" },
      { nomMusique: "Une année sans lumière", parole: "" },
      { nomMusique: "Haiti", parole: "" },
      { nomMusique: "Crown of Love", parole: "" },
      { nomMusique: "Wake Up", parole: "" },
      { nomMusique: "In the Backseat", parole: "" },
    ],
  },
  {
    src: require("../img/alfa-rococo.jpg"),
    artiste: "Alfa Rococo",
    nomAlbum: "Léver l'ancre",
    musiques: [
      { nomMusique: <a href="#">Les Jours de Pluie</a>, parole: "Les journées de pluie ont noirci le décor\
      Et les nouvelles sont mauvaises encore\
      Les gens se font beaucoup moins de bien que de tort\
      Sur tes deux oreilles tu dors encore\
      Des dizaines de tempêtes ont soufflé\
      Des éclairs ont tonné par milliers\
      La rivière a même de son lit débordé\
      Toi tu devrais peut-être y rester\
      Rendors-toi\
      La tourmente est encore au centre de l'histoire\
      S'ils sont même arrivés à la voir\
      Que cette chose déchue qu'on appelle l'espoir\
      Disparaît tranquillement dans le noir\
      Quand le bleu du ciel sera voilé\
      Que le soleil ne pourra plus percer\
      Lorsque ce jour viendra et que je partirai\
      Crois-moi je te réveillerai\
      Rendors-toi\
      Rendors-toi\
      C'n'est pas encore la fin du monde\
      Pas encore la dernière seconde\
      Ce jour de pluie bientôt cessera\
      Rendors-toi\
      Les journées de pluie ont noirci le décor\
      Et les nouvelles sont mauvaises encore\
      Les gens se font beaucoup moins de bien que de tort\
      Sur tes deux oreilles tu dors encore\
      Si les pleurs sur les joues ont coulé\
      Et le temps plus rien ne peut changer\
      Lorsque ce jour viendra et que je partirai\
      Crois-moi je te réveillerai\
      Rendors-toi\
      C'n'est pas encore la fin du monde\
      Pas encore la dernière seconde\
      Ce jour de pluie bientôt cessera\
      Rendors-toi\
      Rendors-toi\
      Rendors-toi\
      Rendors-toi\
      Rendors-toi" },

      { nomMusique:  <a href="#">Lever l'Ancre</a>, parole: "Là-bas le ciel est si haut\
      Et le rivage délicat\
      Les aurores sont roses\
      Et le temps n'est jamais froid\
      Ici, la porte est close et le plafond est bas\
      Lève-la, l'ancre, lève-la\
      Toutes les eaux qui sont tombées\
      Sur les neiges de février\
      Ont laissé mon âme gelée\
      Mes paupières glacées\
      Car ici, comme mes yeux, le soleil ne brille pas\
      Lève-la, l'ancre, lève-la (l'ancre, lève-la)\
      Lève-la, lève-la\
      L'ancre, lève, lève-la\
      Quitte le port, prends le large là-bas\
      Lève-la, l'ancre, lève-la (l'ancre, lève-la)\
      Lève-la, lève-la\
      L'ancre, lève, lève-la\
      Quitte le port, prends le large là-bas\
      Lève-la, l'ancre, lève-la\
      Lève-la, l'ancre, lève-la\
      Lève-la ah, l'ancre, lève-la, lève-la\
      Baby, let me go\
      Please, let me, let me go\
      Laisse-moi desserrer l'étau\
      Et porter le flambeau\
      Car même s'il pleut des tonnes d'eau\
      Le jardin ne fleurit pas\
      Lève-la, l'ancre, lève-la\
      Ne me dis pas de t'oublier\
      Ne me dis jamais de rester\
      J'ai déjà les pieds sur le quai\
      Les amarres sont levées\
      Je m'en vais à mille lieux\
      Je ne reviendrai pas\
      Lève-la, l'ancre, lève-la (l'ancre, lève-la)\
      Lève-la, lève-la\
      L'ancre, lève, lève-la\
      Quitte le port, prends le large là-bas\
      Lève-la, l'ancre, lève-la (l'ancre, lève-la)\
      Lève-la, lève-la\
      L'ancre, lève, lève-la\
      Quitte le port, prends le large là-bas\
      Lève-la, l'ancre, lève-la\
      Lève-la, l'ancre, lève-la\
      Lève-la ah, l'ancre, lève-la, lève-la\
      Je veux naviguer mon bateau\
      Dériver vers les grandes eaux\
      Sentir le vent derrière mon dos\
      User le bois de mes sabots\
      Comme le voleur prend le maquis\
      Et l'oiseau sort de son nid\
      Baby, let me go, please, baby, let me go, please, baby\
      Baby, let me go, please, let me, let me go\
      Lève-la, l'ancre, lève-la\
      Baby, let me go, please, let me, let me go\
      Lève-la, l'ancre, lève-la\
      Baby let me go, please, let me, let me go\
      Lève-la, l'ancre, lève-la\
      Baby, let me go, please, let me, let me go\
      Lève-la, l'ancre, lève-la\
      Lève-la, l'ancre, lève-la\
      Lève-la ah, l'ancre, lève-la, lève-la" },
      { nomMusique: "Je Pense A Toi", parole: "" },
      { nomMusique: "Confiture Verte", parole: "" },
      { nomMusique: "Paradis Artificiel", parole: "" },
      { nomMusique: "Peau De Chagrin", parole: "" },
      { nomMusique: "Horribles Gens", parole: "" },
      { nomMusique: "Plus Rien A Faire", parole: "" },
      { nomMusique: "Le Laboratoire", parole: "" },
      { nomMusique: "La Fenêtre", parole: "j" },
      { nomMusique: "Véga", parole: "" },
    ],
  },
  {
    src: require("../img/ariane-moffat.jpg"),
    artiste: "Ariane Moffat",
    nomAlbum: "Le Coeur Dans La Tête",
    musiques: [
      { nomMusique:  <a href="#">Combustion Lente</a>, parole: "Je suis un sablier\
      Devant mon feu de foyer\
      Les flammes coupent la nuit en deux\
      Et réchauffent décembre\
      Je suis de verre et de cendres\
      Accroupie, je suis une chaise\
      Et je souffle sur la braise\
      Impuissante\
      Combustion lente\
      Fermer la clé\
      Chiffonner du papier\
      Laisser respirer\
      Oublier\
      Brûler des souvenirs\
      Réchauffer des désirs\
      Avant de repartir au pays des rêves\
      Je suis un sablier\
      Devant mon feu de foyer\
      Un petit grain féminin\
      Sur une plage d'infini\
      Et je souffle sur la braise\
      Mon cerveau rougit, puis s'apaise\
      Combustion lente\
      Demain au petit matin\
      Je ferai fondre décembre\
      Demain au petit matin\
      Je ferai fondre des cendres" },
      { nomMusique:  <a href="#">Se Perdre</a>, parole: "Se perdre\
      Dans un ciel tout bleu\
      Se perdre\
      Dans un verre pour deux\
      Se perdre\
      Dans son plus beau rêve\
      Se perdre\
      Le jour de son anniversaire\
      Se perdre\
      Dans un bouquet de fleurs\
      Se perdre\
      Dans un miroir sans faille\
      Se perdre\
      Une boussole sur le cœur\
      Se perdre\
      Tout à l'heure\
      Dans un nid de paille tout chaud\
      Être un oiseau au fond de l'eau\
      Se perdre\
      Dans la fosse d'orchestre\
      Se perdre\
      Dans une roue de bicyclette\
      Se perdre\
      Dans ses propres mots\
      Entre un 1 et un 0\
      Se perdre dans une clairière\
      En plein été\
      Se perdre une carte routière sous le nez\
      Les deux mains dans la même manche\
      Être un poisson sur une branche\
      Se perdre\
      À nouveau" },
      { nomMusique: "Le Coeur Dans La Tête", parole: "" },
      { nomMusique: "Montréal", parole: "" },
      { nomMusique: "Retourne", parole: "" },
      { nomMusique: "Farine 5 Roses", parole: "" },
      { nomMusique: "Imparfait", parole: "" },
      { nomMusique: "Will You Follow Me", parole: "" },
      { nomMusique: "Terminus", parole: "" },
      { nomMusique: "Valentine", parole: "" },
      { nomMusique: "Histoire D'Ére", parole: "" },
      { nomMusique: "(silence)", parole: "" },
      { nomMusique: "Laboratoire Amoureux", parole: "" },

    ],
  },
  {
    src: require("../img/jean-leloup.jpg"),
    artiste: "Jean Leloup",
    nomAlbum: "Paradis city",
    musiques: [
      { nomMusique:  <a href="#">Paradis City</a>, parole: "Tous les chemins mènent en enfer, et quand tu vois la porte en fer\
      Il est trop tard pour te refaire, retour au concessionnaire\
      Toutes les routes meurent sur terre\
      Les morts ont appris à se taire\
      Et je cry, je cry, baby wou\
      À Paradis City, à Paradis City\
      Et je cry, je cry, baby wou\
      À Paradis City, à Paradis City\
      Tous les chemins mènent en enfer et rien de rien ne t’appartient\
      Que les couleurs du ciel immense un jour de mai tout recommence\
      Tendre est la nuit, les illusions qui meurent, les idées de bonheur\
      Je suis un voleur d’éternité dans un monde blessé\
      Et je cry, je cry, baby wou\
      À Paradis City, à Paradis City\
      Et je cry, je cry, baby wou\
      À Paradis City, à Paradis City\
      Cours! Cours!\
      Court, court le vent remplissant les étranges oranges du temps\
      Nous sommes les marionnettes du temps qui s’arrête\
      Tous les chemins mènent en enfer pendant que le cœur dans les airs\
      S’accroche au sommet des éclairs\
      Tous les chemins mènent en enfer, mais quand tu vois la porte en fer\
      Il est trop tard pour te refaire, retour au concessionnaire\
      On ne sait pas le grand mystère\
      Arrivent les hélicoptères (ha ha)\
      Et je cry, je cry, baby wou\
      À Paradis City, à Paradis City\
      Et je cry, je cry, baby wou\
      À Paradis City, à Paradis City" },
      { nomMusique: <a href="#">Willie</a>, parole: "Je suis si vieux et où sont mes petites vieilles ?\
      Pour ma part, il me tarde de partir en voyage\
      Quitter cette famille de terreurs qui fourmillent\
      Les chiens aboient le train passe\
      C’est la nuit pas loin de minuit\
      Les étoiles sont magnifiques le ciel est noir de ce noir bleu que l’on voit\
      Quand on est triste ou bien joyeux\
      Au loin les flammes, au loin les flammes, au loin les flammes, au loin les flammes\
      Au loin les…\
      Et au vent qui emmènera la fumée de ma cabane en bois\
      Je lègue ma philosophie et aussi toutes mes idées de génie\
      Et enfin à toi, le passant qui passera, je te lègue ma Ford Nova\
      Je te préviens tout de suite : l’amour n’existe pas\
      Au loin les flammes, au loin les flammes" },

      { nomMusique: "Les Flamants Roses", parole: "" },
      { nomMusique: "Petit Papillon", parole: "" },
      { nomMusique: "Les Bateaux", parole: "" },
      { nomMusique: "Feuille Au Vent", parole: "" },
      { nomMusique: "Voyageur", parole: "" },
      { nomMusique: "Retour à La Maison", parole: "" },
      { nomMusique: "Le Roi Se Meurt", parole: "" },
      { nomMusique: "Zone Zéro", parole: "" },
    ],
  },
  {
    src: require("../img/lisa-leblanc.jpg"),
    artiste: "Lisa LeBlanc",
    nomAlbum: "Lisa LeBlanc",
    musiques: [
      { nomMusique:  <a href="#">Cerveau Ramolli</a>, parole: "Tellement pu rien qui s'passe dans ma vie\
      J'lis des livres, j'regarde la tivi pis des films en jogging\
      Tellement pu rien qui s'passe dans ma vie\
      J'me couche à neuf heures, j'me lève de bonne heure pour aucune raison spécifique\
      Chu rendue plate à mourir, j'feele mon cerveau ramollir\
      Chu rendue plate à mourir, j'feele mon cerveau ramollir\
      Tellement pu rien qui s'passe dans ma vie\
      J'parle pu à personne, j'sors pas de la maison sauf pour aller travailler\
      Tellement pu rien qui s'passe dans ma vie\
      J'sors pas de mon lit sauf pour me faire à manger pis aller pisser\
      Chu rendue plate à mourir, j'feele mon cerveau ramollir\
      Chu rendue plate à mourir, j'feele mon cerveau ramollir\
      Tellement pu rien qui s'passe dans ma vie\
      J'ai pas d'chien, j'ai pas d'chat, j'ai pas d'char, j'ai pas d'chum\
      Tellement pu rien qui s'passe dans ma vie\
      J'sors pu dans les bars parce que j'fume pu pis j'bois pu\
      Chu rendue plate à mourir, j'feele mon cerveau ramollir\
      Chu rendue plate à mourir, j'feele mon cerveau ramollir\
      Chu rendue plate à mourir, j'feele mon cerveau ramollir\
      Chu rendue plate à mourir, j'feele mon cerveau ramollir" },
      { nomMusique: <a href="#">Du Duvet Dans Les Poches</a>, parole: "Les yeux collés comme du Krazy Glue\
      Y reste pu grand couleur sur mes joues\
      La tête ailleurs depuis j'sais pu quand\
      Tu comptes pu les jours quand t'es rendu là\
      C'pas que j'pédale pas\
      C'est que j'pédale trop dans l'vide\
      J'ai du global warming dans la brain\
      Les saisons changent plus vite\
      Que chu habituée\
      J'ai barré les portes de la maison\
      Pis les heures de visite sont rendues rough\
      C'pas que j'pédale pas\
      C'est que j'pédale trop dans l'vide\
      C'pas que j'pédale pas\
      C'est que j'pédale trop dans l'vide\
      Le bonheur en plastique, je l'ai acheté\
      Mais y était pas s'a garantie pis y s'est brisé\
      J'me suis retrouvée avec rien dans les poches\
      Sauf du duvet lourd comme des roches\
      C'pas que j'pédale pas\
      C'est que j'pédale trop dans l'vide\
      C'pas que j'pédale pas\
      C'est que j'pédale trop dans l'vide\
      C'pas que j'pédale pas\
      C'est que j'pédale trop dans l'vide" },
      { nomMusique: "Motel", parole: "" },
      { nomMusique: "Juste Parce Que J'peux", parole: "" },
      { nomMusique: "Câlisse-moi Là", parole: "" },
      { nomMusique: "J'pas Un Cowboy", parole: "" },
      { nomMusique: "Chanson D'une Rouspéteuse", parole: "" },
      { nomMusique: "Lignes D'Hydro", parole: "" },
      { nomMusique: "Y Fait Chaud", parole: "" },
      { nomMusique: "Avoir Su", parole: "" },
      { nomMusique: "Kraft Dinner", parole: "" },
      { nomMusique: "J't'écris Une Chanson D'amour", parole: "" },
      { nomMusique: "Aujourd'hui, Ma Vie C'est D'la Marde", parole: "" },
    ],
  },
  {
    src: require("../img/caveboy.jpg"),
    artiste: "Caveboy",
    nomAlbum: "Kiss in the park",
    musiques: [
      { nomMusique: <a href="#">Silk For Gold</a>, parole: "How long would I have to wait\
      So lost standing at your gate\
      I called but I don't know why\
      So clear when I cross the line\
      I found that I felt so tired\
      Caught up in a sleepless night\
      So take it all 'cause I have to leave\
      Heavy, never meant for me\
      Hey yeah, hey yeah\
      So I trade my silk for gold\
      I know, I know, don't need it anymore\
      Hey yeah, hey yeah\
      Rid me of all my clothes\
      I know, I know, don't need 'em anymore\
      Sometimes when I close my eyes\
      I forget what your touch was like\
      It's not every day that I feel the will\
      So take me now, I'm surrendering" },
      { nomMusique: <a href="#">I Wonder</a>, parole: "Discovering the way\
      After falling on my knees again\
      Burning up 'cause there's nothing to save me\
      From the desert sun\
      It's a shot in the dark\
      And I just want to see the light\
      Dustin' off but I know I'm still waiting\
      To begin again\
      In the night, I wonder\
      If I could hold you\
      But it makes me colder\
      The more I show you\
      Oh, oh, oh, oh\
      Oh, oh, oh, oh\
      When the day light is out\
      And I finally start to look around\
      I don't recognize anyone's faces\
      Don't even recognize myself\
      In the night, I wonder\
      If I could hold you\
      But it makes me colder\
      The more I show you\
      In the night, I wonder (Oh, oh, oh, oh)\
      If I could hold you (Oh, oh, oh, oh)\
      But it makes me colder (Oh, oh, oh, oh)\
      The more I show you (Oh, oh, oh, oh)\
      Oh, oh, oh, oh\
      Oh, oh, oh, oh\
      Oh, oh, oh, oh\
      Oh, oh, oh, oh" },
      { nomMusique: "Hide Your Love", parole: "" },
      { nomMusique: "Lifetime", parole: "" },
      { nomMusique: "N.Y.P.", parole: "" },
      { nomMusique: "Find Me", parole: "" },
      { nomMusique: "Obsessed", parole: "" },
      { nomMusique: "Guess I've Changed", parole: "" },
      { nomMusique: "Landslide", parole: "" },
      { nomMusique: "Up In Flames", parole: "" },
    ],
  },
  {
    src: require("../img/mes-aieux.jpg"),
    artiste: "Mes aieux",
    nomAlbum: "Tire-toi une bûche",
    musiques: [
      { nomMusique: "	La Lettre", parole: "akljsdlfjalsdj" },
      { nomMusique: "Dégénérations", parole: "akljsdlfjalsdj" },
      { nomMusique: "	Nous Sommes", parole: "" },
      { nomMusique: "	Mononcle Prémi", parole: "" },
      { nomMusique: "	La Corrida de la Corriveau", parole: "" },
      { nomMusique: "	Train de vie (Le Surcheval)", parole: "" },
      { nomMusique: "	L'héritage", parole: "" },
      { nomMusique: "	En vérité", parole: "" },
      { nomMusique: "	Descendus au chantier", parole: "" },
      { nomMusique: "	Remède miracle", parole: "" },
      { nomMusique: "	Qui nous mène?", parole: "" },
      { nomMusique: "	Swigne la bacaisse", parole: "" },
    ],
  },
  {
    src: require("../img/celine-dion.jpg"),
    artiste: "Celine Dion",
    nomAlbum: "The essential",
    musiques: [
      { nomMusique: "My Heart Will Go On", parole: "akljsdlfjalsdj" },
      { nomMusique: "Think Twice", parole: "akljsdlfjalsdj" },
      { nomMusique: "It's All Coming Back To Me Now", parole: "" },
      { nomMusique: "A New Day Has Come", parole: "" },
      { nomMusique: "My Love", parole: "" },
      { nomMusique: "Taking Chances", parole: "" },
      { nomMusique: "That's The Way It Is", parole: "" },
      { nomMusique: "The Power Of Love", parole: "" },
      { nomMusique: "Because You Loved Me", parole: "" },
      { nomMusique: "Falling Into You", parole: "" },
      { nomMusique: "I Drove All Night", parole: "" },
      { nomMusique: "I'm Alive", parole: "" },
      { nomMusique: "All By Myself", parole: "" },
      { nomMusique: "Alone", parole: "" },
      { nomMusique: "Immortality", parole: "" },
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
