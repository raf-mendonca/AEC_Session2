import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../../img/becflixlogo.png';
import './App.css';
import { Catalogue } from '../Catalogue/Catalogue';
import { Categorie } from '../Categorie/Categorie';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  

let logoBecflix = <img src={logo} alt="logoBecflix"/>; 
function App() {  
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>
          <Row>
            <Col-12>
              {logoBecflix}
            </Col-12>           
          </Row>
          <Row>
            <Col-12>
              <Catalogue />
            </Col-12>
          </Row>
        </Container>      
      </header>
    </div> 
  );
}

export default App;
