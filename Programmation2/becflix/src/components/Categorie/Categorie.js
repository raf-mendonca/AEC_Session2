import React from 'react';
import { TvShow } from '../TvShow/TvShow';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export class Categorie extends React.Component{    
    render(){
        const nomCategorie = <h1>Suspense</h1>;
        return (
            <Container>
                <Row>
                    <h1>{nomCategorie}</h1>                  
                </Row>
                <Row>
                   <TvShow/><TvShow/><TvShow/><TvShow/><TvShow/><TvShow/>
                </Row>
            </Container>
        );
    }
}