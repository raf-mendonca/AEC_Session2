import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export class MenuSansPostBack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
   
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/Accueil">BlogTours</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <NavLink  className="mr-3" exact to="/" >Accueil</NavLink>
            <NavLink  className="mr-3" to="/AjouterRapport">Ajouter Voyage</NavLink> 
            <NavLink  className="mr-3" to="/FormEditerRapport">Editer Voyage</NavLink> 
            <NavLink  className="mr-3" to="/ShortenURL">POST</NavLink>
        </Nav>
       
        </Navbar.Collapse>
        </Navbar>  
      </>
    );
  }
}