import React from 'react';
import { Categorie } from '../Categorie/Categorie';
import Row from 'react-bootstrap/Row';

export class Catalogue extends React.Component {
    render(){
        return(
            <Row>
               <Categorie/><Categorie/><Categorie/><Categorie/><Categorie/><Categorie/> 
            </Row>
            
        );
    }
}