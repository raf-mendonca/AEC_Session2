import React from 'react';
import { useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import logo from './img/pwa.png';
import BoutonInstallPWA from './components/BoutonInstallPWA';
import { Accueil } from './components/Accueil';
import { MenuSansPostBack } from './components/MenuSansPostBack';
import { AjouterRapport } from './components/AjouterRapport';
import { BoutonAjouterRapport } from './components/BoutonAjouterRapport';

import FormEditerRapport from './components/FormEditerRapport';
import {Route, Switch, Redirect } from 'react-router-dom' 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.sass'


function App() {
  let location = useLocation();
  return (
  <>
  <ToastContainer autoClose={3000} hideProgressBar />
    <MenuSansPostBack/>     
      <Route path="/" exact component={Accueil}/>
      <Route path="/AjouterRapport" component={AjouterRapport}/>
      <Route path="/Rapports/:titre" component={FormEditerRapport}/>    
      {(location.pathname != "/AjouterRapport" && !location.pathname.startsWith("/Rapports")) && <BoutonAjouterRapport/> }
      
      <br></br>
    <BoutonInstallPWA/>  
  </>
  );
}

export default App;
