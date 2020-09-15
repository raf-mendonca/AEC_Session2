import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import logo from './img/pwa.png';
import BoutonInstallPWA from './components/BoutonInstallPWA';
import { Accueil } from './components/Accueil';
import { MenuSansPostBack } from './components/MenuSansPostBack';
import { FormAjoutRappVoyage } from './components/FormAjoutRappVoyage';
import FormEditerRapport from './components/FormEditerRapport';
import {Route} from 'react-router-dom' 
import './App.sass'


function App() {
  return (
  <>
    <MenuSansPostBack/> 
      <Route path="/" exact component={Accueil}/>
      <Route path="/FormAjoutRappVoyage" component={FormAjoutRappVoyage}/>
      <Route path="/FormEditerRapport" component={FormEditerRapport}/>
    <BoutonInstallPWA/>  
  </>
  );
}

export default App;
