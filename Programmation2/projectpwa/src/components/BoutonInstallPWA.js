import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';  

function BoutonInstallPWA() {
  return (
    <Button className="rounded-0 btn-style" size="md" block id="boutonInstall">
      Installer l'application
    </Button>
  );
}

export default BoutonInstallPWA;
