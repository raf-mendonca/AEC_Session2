import React from 'react';
import Row from 'react-bootstrap/Row';
import { TvShow } from '../TvShow/TvShow';
import Container from 'react-bootstrap/Container';


//Declaraçâo de variaveis em javascript
const tabSuspense = [
    {
        src: require("../../img/Suspense/lesinvincibles.jpg"),
        alt:"Les invincibles", 
        title:"Les Invincibles"
    },
    {
        src: require("../../img/Suspense/19-2.jpg"),
        alt:"19-2",
        title:"19-2"     
    },
    {
        src:require("../../img/Suspense/district31.jpg"),
        alt:"District 31",
        title:"District 31"
    },
    {
        src:require("../../img/Suspense/fugueuse.jpg"),
        alt:"Fugueuse",
        title:"Fugueuse"
    },
    {
        src:require("../../img/Suspense/serienoire.jpg"),
        alt:"Serie noire",
        title:"Serie noire"
    },
    {
        src:require("../../img/Suspense/unite9.jpg"),
        alt:"Unité 9",
        title:"Unité 9"
    },
]

const tabHumour = [
    {
        src:require("../../img/Humour/lanceEtCompte.jpg"),
        alt:"Lance et Compte",
        title:"Lance et Compte"
    },
    {
        src:require("../../img/Humour/lapetitevie.jpg"),
        alt:"La petite vie",
        title:"La petite vie" 
    },
    {
        src:require("../../img/Humour/lesbeauxmalaises.jpg"),
        alt:"lesbeauxmalaises",
        title:"lesbeauxmalaises" 
    },
    {
        src:require("../../img/Humour/lesbougon.jpg"),
        alt:"lesbougon",
        title:"lesbougon" 
    },
    {
        src:require("../../img/Humour/lesboys.jpg"),
        alt:"lesboys",
        title:"lesboys" 
    },
    {
        src:require("../../img/Humour/minuitlesoir.jpg"),
        alt:"minuitlesoir",
        title:"minuitlesoir" 
    }
]

const tabAmericaine = [
    {
        src:require("../../img/Series americaines/betterCallSaul.jpg"),
        alt:"betterCallSaul",
        title:"betterCallSaul" 
    },
    {
        src:require("../../img/Series americaines/breakingbad.jpg"),
        alt:"breakingbad",
        title:"breakingbad" 
    },
    {
        src:require("../../img/Series americaines/dexter.jpg"),
        alt:"dexter",
        title:"dexter"
    },
    {
        src:require("../../img/Series americaines/got.jpg"),
        alt:"got",
        title:"got"
    },
    {
        src:require("../../img/Series americaines/mandalorian.jpg"),
        alt:"mandalorian",
        title:"mandalorian" 
    },
    {
        src:require("../../img/Series americaines/vikings.jpg"),
        alt:"vikings",
        title:"vikings"
    }
]


export class Categorie extends React.Component{    
    render(){
        return (
            <Container>

                <Row>
                    <h2>{this.props.categorie}</h2>                  
                </Row>
                <Row>
                    {this.AfficherCategorie()}
                </Row>
            </Container>
        );
    }
    AfficherCategorie(props){
        const categorie = this.props.categorie;

        if (this.props.categorie === 'Suspense'){
            return ( 
                tabSuspense.map((element,i) => <TvShow
                    keys={"suspense" + i} 
                    src={element.src} 
                    alt={element.alt} 
                    title={element.title}       
                ></TvShow>)                
            )  
        }


        if (this.props.categorie === 'Humour'){
            return (
                tabHumour.map((element,i) => <TvShow
                    keys={"humour" + i} 
                    src={element.src} 
                    alt={element.alt} 
                    title={element.title}       
                ></TvShow>)  
            )
        }
        //
        if (this.props.categorie === 'Séries américaines'){
            return (
                tabAmericaine.map((element,i) => <TvShow
                    keys={"americaine" + i} 
                    src={element.src} 
                    alt={element.alt} 
                    title={element.title}       
                ></TvShow>)
            )
        }       
          


    }
}