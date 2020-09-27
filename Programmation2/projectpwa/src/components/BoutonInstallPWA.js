//Étudiant: Rafael De Mendonça 
//Projet Final: PWA / CrudCrud - BlogTours
//Cours: Tech. Intégration des interfaces web2 et Techniques de Programmation Web 2
//Date: 2020-09-27

import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';  

function BoutonInstallPWA() {
  return (
    <Button className="rounded-0 btn-style text-center" size="sm" block id="boutonInstall">
      Installer l'application
    </Button>
  );
}

export default BoutonInstallPWA;
