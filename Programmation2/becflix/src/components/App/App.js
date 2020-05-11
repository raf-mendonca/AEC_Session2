import React from 'react';
import logo from '../../img/becflixlogo.png';
import './App.css';
import { Catalogue } from '../Catalogue/Catalogue';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  


function App() {  
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>
          <Row>
            <Col>
              <img src={logo} alt="BecFlix" width="100px"/>
            </Col>           
          </Row>
          <Row>
            <Col>
              <Catalogue /> 
              
            </Col>
          </Row>
        </Container>      

      </header>
    </div> 
  );
}

export default App;
