import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export class MenuSansPostBack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const activeStyle = { color: "orange" };
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Ex: Routers</Navbar.Brand>
          <Nav className="mr-auto">
            <NavLink exact to="/" activeStyle={activeStyle}>
              Accueil
            </NavLink>{" "}
            {"  |  "}
            <NavLink to="/Photos" activeStyle={activeStyle}>
              Photos
            </NavLink>{" "}
            {"  |  "}
            <NavLink to="/Video" activeStyle={activeStyle}>
              Vidéo
            </NavLink>{" "}
            {"  |  "}
            <NavLink to="/Carte" activeStyle={activeStyle}>
              Carte
            </NavLink>{" "}
            {"  |  "}
            
          </Nav>
        </Navbar>
        <br />
      </>
    );
  }
}
