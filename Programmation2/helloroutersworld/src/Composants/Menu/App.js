import React from "react";
import { Accueil } from "./Accueil";
import Photos from "./Photos";
import { Video } from "./Video";
import { Carte } from "./Carte";
import { MenuSansPostBack } from "./MenuSansPostBack";
import { PageNotFound } from "./PageNotFound";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { ExempleLink } from "./ExempleLink";

function App() {
  return (
    <>
      <div className="App">
        <MenuSansPostBack />
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/Photos" component={Photos} />
          <Route path="/Video" component={Video} videoId="fA7kQn-l6T4" />
          <Route path="/Carte" component={Carte} />
          <Route component={PageNotFound} />
        </Switch>
        
        <ExempleLink />
      </div>
      
    </>
  );
}

export default App;
