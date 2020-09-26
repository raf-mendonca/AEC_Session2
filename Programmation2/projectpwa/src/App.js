import React from 'react';
import { useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/pwa.png';
import { Accueil } from './components/Accueil';
import { MenuSansPostBack } from './components/MenuSansPostBack';
import { AjouterRapport } from './components/AjouterRapport';
import { BoutonAjouterRapport } from './components/BoutonAjouterRapport';
import FormEditerRapport from './components/FormEditerRapport';
import { PageNotFound } from './components/PageNotFound';
import {Route, Switch, Redirect } from 'react-router-dom' 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.sass';


function App() {
  let location = useLocation();
  return (
  <>
  <ToastContainer autoClose={3000} hideProgressBar />  
    <MenuSansPostBack/> 
    <Switch>    
      <Route path="/" className="mt-5" exact component={Accueil}/>
      <Route path="/AjouterRapport" component={AjouterRapport}/>
      <Route path="/Rapports/:nom" component={FormEditerRapport}/>
      <Redirect from="https://raf-mendonca.github.io/AEC_Session2/Programmation2/projectpwa/build/index.html" to="/"/>
      <Route  component={PageNotFound} />       
    </Switch>  
      <br></br>
      {(location.pathname !== "/AjouterRapport" && !location.pathname.startsWith("/EditerRapport")) && <BoutonAjouterRapport/> }
      {(location.pathname !== "/")}     
    </>
    
  );
}

export default App;
