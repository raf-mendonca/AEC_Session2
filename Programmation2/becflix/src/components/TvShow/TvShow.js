import React from 'react';
import fugueuse from '../../img/fugueuse.jpg';
import Col from 'react-bootstrap/Col';  


export class TvShow extends React.Component{
    render(){
        
        return (  
            <Col xs lg='2'>
                <img src={this.props.src} //Ici tu dois ajouter les props
                    alt = {this.props.alt}
                    className = "img-fluid"
                />
            </Col>
        );
    }
}


  