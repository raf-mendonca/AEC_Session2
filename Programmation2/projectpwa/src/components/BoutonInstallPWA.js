import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';  

function BoutonInstallPWA() {
  return (
    <Button className="rounded-0" variant="primary" size="lg" block id="boutonInstall">
      Installer l'application
    </Button>
  );
}

export default BoutonInstallPWA;
