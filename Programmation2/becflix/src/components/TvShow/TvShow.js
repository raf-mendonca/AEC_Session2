import React from 'react';
import fugueuse from '../../img/fugueuse.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  

export class TvShow extends React.Component{
    render(){
        const becMovie = <img className='img-fluid' src={fugueuse} alt="fugueuse" />; 
        return (  
            <Col lg='2'>
                {becMovie}
            </Col>
        );
    }
}


  