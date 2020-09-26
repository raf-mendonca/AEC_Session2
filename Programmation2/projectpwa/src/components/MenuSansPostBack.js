import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import BoutonInstallPWA from './BoutonInstallPWA';
import '../App.sass';

export class MenuSansPostBack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
   
    return (
      <>
        <Navbar fixed="top" collapseOnSelect expand="lg" className="shadow bg-ligth-blue">
        <Navbar.Brand>BlogTours</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <NavLink  className="mr-3" exact to="/" >Accueil</NavLink>
            <NavLink  className="mr-3 float-right" to="/AjouterRapport">Ajouter Voyage</NavLink> 
        </Nav>
        <Nav>
          <BoutonInstallPWA/>
        </Nav>       
        </Navbar.Collapse>
        </Navbar>  
      </>
    );
  }
}